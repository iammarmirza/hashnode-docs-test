import fs from "fs";

const paths = [
  "home/introduction.mdx",
  "home/quickstart.mdx",
  "home/quickstart/create-an-account.mdx",
  "home/quickstart/run-first-analysis.mdx",
  "home/quickstart/fix-issues.mdx",
  "home/quickstart/activate-new-repositories.mdx",
  "home/quickstart/invite-team-members.mdx",
  "home/quickstart/auto-onboard.mdx",
  "home/configuration.mdx",
  "home/analyzers.mdx",
  "home/analyzers/python.mdx",
  "home/analyzers/ansible.mdx",
  "home/analyzers/c.mdx",
  "home/analyzers/c-c.mdx",
  "home/analyzers/docker.mdx",
  "home/analyzers/java.mdx",
  "home/analyzers/javascript.mdx",
  "home/analyzers/php.mdx",
  "home/analyzers/ruby.mdx",
  "home/analyzers/rust.mdx",
  "home/analyzers/scala.mdx",
  "home/analyzers/secrets.mdx",
  "home/analyzers/shell.mdx",
  "home/analyzers/sql.mdx",
  "home/analyzers/terraform.mdx",
  "home/analyzers/test-coverage.mdx",
  "home/analyzers/go.mdx",
  "home/analyzers/swift.mdx",
  "home/analyzers/kotlin.mdx",
  "home/community-analyzers.mdx",
  "home/transformers.mdx",
  "home/transformers/autopep8.mdx",
  "home/transformers/black.mdx",
  "home/transformers/isort.mdx",
  "home/transformers/gofmt.mdx",
  "home/transformers/gofumpt.mdx",
  "home/transformers/rustfmt.mdx",
  "home/transformers/prettier.mdx",
  "home/transformers/rubocop.mdx",
  "home/transformers/scalafmt.mdx",
  "home/transformers/standardjs.mdx",
  "home/transformers/standardrb.mdx",
  "home/transformers/yapf.mdx",
  "home/transformers/google-java-format.mdx",
  "home/transformers/dotnet-format.mdx",
  "home/transformers/clang-format.mdx",
  "home/transformers/php-cs-fixer.mdx",
  "home/transformers/ktlint.mdx",
  "home/transformers/swift-format.mdx",
  "home/transformers/ruff-formatter.mdx",
  "home/issues.mdx",
  "home/issues/ignore-rules.mdx",
  "home/metrics.mdx",
  "home/autofix.mdx",
  "home/access-control.mdx",
  "home/access-control/managing-members-in-your-team.mdx",
  "home/access-control/managing-peoples-access-to-team-with-roles.mdx",
  "home/access-control/managing-access-to-your-teams-repositories.mdx",
  "dashboard/account-management.mdx",
  "dashboard/team-view.mdx",
  "dashboard/team-view/home.mdx",
  "dashboard/team-view/repositories.mdx",
  "dashboard/team-view/reports.mdx",
  "dashboard/team-view/members.mdx",
  "dashboard/team-view/settings.mdx",
  "dashboard/repository-view.mdx",
  "dashboard/repository-view/overview.mdx",
  "dashboard/repository-view/issues.mdx",
  "dashboard/repository-view/metrics.mdx",
  "dashboard/repository-view/reports.mdx",
  "dashboard/repository-view/history.mdx",
  "dashboard/repository-view/repository-settings.mdx",
  "dashboard/repository-view/monorepos.mdx",
  "integrations/slack.mdx",
  "integrations/jira.mdx",
  "integrations/vanta.mdx",
  "integrations/sso.mdx",
  "integrations/sso/saml-sso-scim-okta.mdx",
  "integrations/sso/saml-sso-scim-onelogin.mdx",
  "integrations/sso/saml-sso-scim-azure-ad.mdx",
  "integrations/sso/saml-sso-scim-google-workspace.mdx",
  "integrations/vs-code.mdx",
  "enterprise-server/overview.mdx",
  "enterprise-server/requirements.mdx",
  "enterprise-server/installation.mdx",
  "enterprise-server/installation/standalone-cluster.mdx",
  "enterprise-server/installation/existing-kubernetes-cluster.mdx",
  "enterprise-server/installation/airgapped-installation.mdx",
  "enterprise-server/installation/helm.mdx",
  "enterprise-server/vcs-integrations.mdx",
  "enterprise-server/vcs-integrations/github.mdx",
  "enterprise-server/vcs-integrations/gitlab.mdx",
  "enterprise-server/vcs-integrations/google-source-repositories.mdx",
  "enterprise-server/vcs-integrations/bitbucket-cloud.mdx",
  "enterprise-server/vcs-integrations/bitbucket-datacenter.mdx",
  "enterprise-server/vcs-integrations/azure-devops-services.mdx",
  "enterprise-server/configuration.mdx",
  "enterprise-server/enterprise-upgrade-guide.mdx",
  "enterprise-server/control-panel.mdx",
  "enterprise-server/control-panel/user-management.mdx",
  "enterprise-server/control-panel/scim-provisioning-on-okta.mdx",
  "enterprise-server/control-panel/license.mdx",
  "enterprise-server/integration-jira-cloud.mdx",
  "enterprise-server/integration-slack.mdx",
  "enterprise-server/troubleshooting.mdx",
  "enterprise-server/frequently-asked-questions.mdx",
  "developers/cli.mdx",
  "developers/webhooks.mdx",
  "developers/api.mdx",
  "developers/api/personal-access-token.mdx",
  "developers/api/viewer.mdx",
  "developers/api/account.mdx",
  "developers/api/team.mdx",
  "developers/api/repository.mdx",
  "developers/api/check.mdx",
  "developers/api/analysis-run.mdx",
  "developers/api/analyzer.mdx",
  "developers/api/transformer.mdx",
  "developers/api/issue.mdx",
  "developers/api/metric.mdx",
  "developers/api/reference-enums.mdx",
  "developers/api/reference-scalars.mdx",
  "developers/api/reference-pagination.mdx",
  "developers/api/reports.mdx",
  "help/frequently-asked-questions.mdx",
  "help/troubleshooting.mdx",
  "help/support.mdx",
  "help/permissions.mdx",
];

function convertMdxToMarkdown(mdxFilePath) {
  // Check if the file exists
  if (!fs.existsSync(mdxFilePath)) {
    console.error(`The file ${mdxFilePath} does not exist.`);
    return;
  }

  // Read the content of the MDX file
  let content = fs.readFileSync(mdxFilePath, "utf-8");

  // Convert plain links from <URL> to [URL](URL) format, but not inside [block:html]
  content = content.replace(
    /(\[block:html\][\s\S]*?\[\/block\])|<((https?:\/\/[^>]+))>/g,
    (match, htmlBlock, url) => {
      if (htmlBlock) {
        return htmlBlock; // Return the [block:html] section unchanged
      }
      return `[${url}](${url})`; // Convert to Markdown link format
    }
  );

  // Convert block:html to valid HTML (removes the block)
  content = content.replace(
    /\[block:html\]\s*{\s*"html":\s*"(.*?)"\s*}\s*\[\/block\]/gs,
    (match, htmlContent) => {
      // Decode HTML entities and clean up the HTML content
      const cleanedHtml = htmlContent
        .replace(/\\\"/g, '"') // Unescape quotes
        .replace(/\\</g, "<") // Remove backslashes before opening tags
        .replace(/\\>/g, ">") // Remove backslashes before closing tags
        .replace(/\/\s*?>/g, ">") // Removes trailing slashes in self-closing tags
        .replace(/\[([^\]]+)\]/g, "<$1>") // Convert square brackets to angle brackets
        .trim(); // Trim any whitespace

      return cleanedHtml; // Return the cleaned HTML content
    }
  );

  // Convert block:image to Markdown image syntax
  content = content.replace(
    /\[block:image\][\s\S]*?"(https:\/\/[^"]+)"[\s\S]*?\[\/block\]/g,
    "$1"
  );

  // Convert block:parameters to Markdown table
  content = content.replace(
    /\[block:parameters\](.*?)\[\/block\]/gs,
    (match, paramsContent) => {
      try {
        // Extract parameters as a JSON object
        const params = JSON.parse(paramsContent);
        const data = params.data;
        const headers = [];
        const rows = [];

        // Extract headers
        for (let i = 0; i < params.cols; i++) {
          headers.push(data[`h-${i}`]);
        }

        // Extract rows
        for (let i = 0; i < params.rows; i++) {
          const row = [];
          for (let j = 0; j < params.cols; j++) {
            row.push(data[`${i}-${j}`]);
          }
          rows.push(row);
        }

        // Convert to Markdown table
        let tableMarkdown = `| ${headers.join(" | ")} |\n`;
        tableMarkdown += `| ${headers.map(() => "---").join(" | ")} |\n`;
        rows.forEach((row) => {
          tableMarkdown += `| ${row.join(" | ")} |\n`;
        });

        return tableMarkdown; // Return formatted table
      } catch (error) {
        console.error(`Error parsing parameters: ${error}`);
        return match; // Return original block if parsing fails
      }
    }
  );

  // Handle plain Markdown links
  content = content.replace(/(?:^|\s)(https?:\/\/[^\s]+)/g, (match, url) => {
    return `${match.replace(url, `[${url}](${url})`)}`; // Convert to Markdown link format
  });

  // Create a new file for the converted Markdown
  fs.writeFileSync(mdxFilePath, content, "utf-8");

  console.log(`Converted content saved to ${mdxFilePath}`);
}

// // Example usage
// convertMdxToMarkdown(
//   "./guides/default-guide/version-1/home/quickstart/activate-new-repositories.mdx"
// );

paths.forEach((path) => {
  convertMdxToMarkdown(`./guides/default-guide/version-1/${path}`);
});