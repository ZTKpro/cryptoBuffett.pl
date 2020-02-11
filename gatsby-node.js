const path = require("path")

exports.createPages = async ({graphql,  actions, reporter }) => {
    const {createPage } = actions
    const promoctionTemplates = path.resolve('src/templates/promoctionTemplates.js')
    const result = await graphql(`
        {    
            promoction {
                promocjs {
                    id
                    tytul
                    krotkiOpis
                    createdAt
                    zdjecie {
                        id
                        url
                    }
                    opisObrazka
                    podstrona
                    pierwszyKrok
                    link
                    jakNaTymZarobic
                    wazneInformacje
                }
            }
        }
        `)
        result.data.promoction.promocjs.forEach(  promocje => {
            createPage({
            path: promocje.podstrona,
            component: promoctionTemplates,
            context: {
                data: promocje
            },
        })
    })
}