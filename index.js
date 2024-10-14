import fs from "fs";
import path from "path";

function convertMdxToMarkdown(mdxFilePath) {
  // Check if the file exists
  if (!fs.existsSync(mdxFilePath)) {
    console.error(`The file ${mdxFilePath} does not exist.`);
    return;
  }

  // Read the content of the MDX file
  let content = fs.readFileSync(mdxFilePath, "utf-8");

  // Convert block:image to Markdown image syntax
  content = content.replace(
    /\[block:image\]\s*{\s*"images":\s*\[\s*{([^}]+)}\s*]\s*}\s*/g,
    (match, p1) => {
      // Extract the URL from the parameters
      const imageParams = JSON.parse(`{${p1}}`);
      const imageUrl = imageParams.image ? imageParams.image : "";
      const altText = imageParams.alt ? imageParams.alt : "Image";
      return `![${altText}](${imageUrl})`;
    }
  );

  // Convert block:html to HTML tags
  content = content.replace(/\[block:html\](.*?)\[\/block\]/gs, "$1");

  // Convert block:parameters to Markdown
  content = content.replace(
    /\[block:parameters\](.*?)\[\/block\]/gs,
    (match, p1) => {
      // Extract parameters as a JSON object
      const params = JSON.parse(p1);
      let paramMarkdown = "### Parameters\n\n";
      for (const [key, value] of Object.entries(params)) {
        paramMarkdown += `- **${key}:** ${value}\n`;
      }
      return paramMarkdown;
    }
  );

  // Create a new file for the converted Markdown
  fs.writeFileSync(mdxFilePath, content, "utf-8");

  console.log(`Converted content saved to ${mdxFilePath}`);
}

// Example usage
convertMdxToMarkdown(
  "./guides/default-guide/version-1/integrations/sso/saml-sso-scim-onelogin.mdx"
);
