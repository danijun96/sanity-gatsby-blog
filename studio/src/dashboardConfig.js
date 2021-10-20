export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61701606c3e1252c3fcb668f",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-cdikd93w",
                  apiId: "52d87fa6-e52e-4e83-a1d2-3378ee75a185",
                },
                {
                  buildHookId: "617016067338c454fb64c2e6",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-ip6pjcbg",
                  apiId: "d2e83ad8-040e-4663-b9a8-eff79d505b94",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/danijun96/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-ip6pjcbg.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
