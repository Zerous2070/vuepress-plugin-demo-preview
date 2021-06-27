const path = require('path');

module.exports = () => {
    return {
        name: 'vuepress-plugin-demo-preview',
        extendsMarkdown: md => {
            md.use(require('markdown-it-container'), 'demo', {
                render: (tokens, idx, p1, p2) => {
                    // var m = tokens[idx].info.trim().match(/^demo\s+(.*)$/);
                    if (tokens[idx].nesting === 1) {
                    // opening tag
                        return "<demo-preview>{{`";

                    } else {
                        let scriptTagsContents = p2.hoistedTags;
                        let scriptContent = scriptTagsContents.pop() || '';
                        return scriptContent + "`}}</demo-preview>";
                        }
                },
            });
        },
        clientAppSetupFiles: path.resolve(__dirname, 'clientAppSetupFiles.js')
    }
};
