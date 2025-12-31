/**
 * Remark plugin to transform GitHub-style alerts in blockquotes
 * Converts:
 *   > [!NOTE]
 *   > Content here
 * 
 * Into:
 *   <Alert type="note">Content here</Alert>
 */

import { visit } from 'unist-util-visit';

const alertTypes = ['note', 'tip', 'important', 'warning', 'caution'];
const alertRegex = /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/i;

export function remarkGithubAlerts() {
    return (tree) => {
        visit(tree, 'blockquote', (node, index, parent) => {
            // Check if the first child is a paragraph with alert syntax
            if (!node.children || node.children.length === 0) return;

            const firstChild = node.children[0];
            if (firstChild.type !== 'paragraph' || !firstChild.children) return;

            const firstTextNode = firstChild.children[0];
            if (firstTextNode?.type !== 'text') return;

            const match = firstTextNode.value.match(alertRegex);
            if (!match) return;

            const alertType = match[1].toLowerCase();

            // Remove the alert marker from the text
            firstTextNode.value = firstTextNode.value.replace(alertRegex, '');

            // If the first text node is now empty, remove it
            if (firstTextNode.value === '') {
                firstChild.children.shift();
            }

            // If the first paragraph is now empty, remove it
            if (firstChild.children.length === 0) {
                node.children.shift();
            }

            // Create the Alert component
            const alertNode = {
                type: 'mdxJsxFlowElement',
                name: 'Alert',
                attributes: [
                    {
                        type: 'mdxJsxAttribute',
                        name: 'type',
                        value: alertType,
                    },
                ],
                children: node.children,
                data: { _mdxExplicitJsx: true },
            };

            // Replace the blockquote with the Alert component
            parent.children[index] = alertNode;
        });
    };
}

export default remarkGithubAlerts;
