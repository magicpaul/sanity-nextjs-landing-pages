export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60ef542d9dffb8205b32ec26',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-x126somp',
                  apiId: '3b36aac4-3de7-42e3-89d5-c007d4909e04'
                },
                {
                  buildHookId: '60ef542d8dfd8d2444812d73',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-u4p5i23j',
                  apiId: '1f591fb8-5d17-48b4-aa7a-6d1121bbc1d8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magicpaul/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-u4p5i23j.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
