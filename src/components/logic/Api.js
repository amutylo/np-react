import axios from 'axios';
const PROTOCOL = 'http://';
const BASEPATH = 'dr15.devcodin.com';
//const BASEPATH = 'news-portal.lc';
//const BASEPATH = 'news-portal.lc';
const GRAPHQL = '/graphql';
const MOSTPOPULAR = '/rest/api/popular_articles';
const CONTACTUS = '/rest/api/contact_callback';

const NPApi = {
	getMenuItems: async function() {
		// const API_URL = GRAPHQL;
		const API_URL = PROTOCOL + BASEPATH + GRAPHQL;
		return await axios.post(`${ API_URL }`, {
			query: `query {
          menuByName(name: "footer") {
            links {
              label
              url {
                path
              }
            }
          }
        }`,
		});
	},
	getCategoryMenuItems: async function() {
		//const API_URL = GRAPHQL;
		const API_URL = PROTOCOL + BASEPATH + GRAPHQL;
		const response = await axios.post(`${ API_URL }`, {
			query: `query categoryListTerms($limit:Int!, $offset:Int!, $vid:String!){
        taxonomyTermQuery(limit: $limit, offset: $offset,
          filter: {conditions: [{operator: EQUAL, field: "vid", value: [$vid]}]})
        {
          entities {
            entityLabel
            entityId
            entityUrl{
              path
            }
            ... on TaxonomyTermCategory {
              fieldIcon
              fieldVisible
          }
          }
        }
      }`,
			variables: {
				limit: 20,
				offset: 0,
				vid: 'category',
			},
		});
		return response;
	},
	getNodeByUrl: async function(slug) {
		const API_URL = PROTOCOL + BASEPATH + GRAPHQL;
		return await axios.post(`${ API_URL }`, {
			query: `query getNodeByPath($path:String!){
        route(path:$path){
            ... on EntityCanonicalUrl {
            entity {
              entityBundle
              entityCreated
              entityUrl{
                path
              }
              ... on NodeArticle{
                created
                body {
                  value
                }
                title
                fieldNewsCategory{
                  entity{
                    ... termFragment
                  }
                }
                fieldSource{
                  title
                  url {
                    path
                  }
                }
                fieldNewsPortalLike{
                  likes
                }
                 fieldImage{
                title
                alt
                thumb:derivative(style:DETAILPAGE) {
                  url
                  width
                  height
                }
              }
              }
              ... on NodePage {
                created
                title
                body{
                  value
                }
              }
            }
          }
        }
      }

      fragment termFragment on TaxonomyTerm {
        name
        entityUrl {
          path
        }
      }`,
			variables: {
				path: slug,
			},
		});
	},
	getNodeById: async function(id) {
		// const API_URL = GRAPHQL;
		const API_URL = PROTOCOL + BASEPATH + GRAPHQL;
		return await axios.post(`${ API_URL }`, {
			query: `
        query {
          nodeById(id: ${ id.toString() }) {
            entityLabel
            entityBundle
          }
        }
      `,
		});
	},
	getCategoryList: async function(categories) {
		console.log('Api got categories:', categories);
		if (!categories || !categories.length) {
			return [];
		}
		const API_URL = PROTOCOL + BASEPATH + GRAPHQL;
		return await axios.post(`${ API_URL }`, {
			query: `
      query getArticleByCategory($categories: [String]!, $limit:Int!, $offset:Int!){
        nodeQuery(limit: $limit, offset: $offset, filter: {
          conjunction: AND
          conditions: [
            {operator: EQUAL, field: "type", value: ["article"]},
            {field: "field_news_category", value: $categories, operator: IN}
        ]
        }
          sort: [{
          field: "created"
          direction: DESC
        }]
        )
        {
          entities {
            entityLabel
            entityUrl {
              path
            }
            entityCreated
             ... on NodeArticle {
              fieldNewsCategory {
                entity {
                  ...termFragment
                }
              }
              fieldImage{
                title
                alt
                thumb:derivative(style:TEASER_480X320) {
                  url
                  width
                  height
                }
              }
        }
          }
        }
      }

      fragment termFragment on TaxonomyTermCategory {
        name
        entityUrl{
          path
        }
      }`,
			variables: {
				limit: 20,
				offset: 0,
				categories: categories,
			},
		});
	},
	getMostPopular: async function() {
		const API_URL = PROTOCOL + BASEPATH + MOSTPOPULAR;
		return await axios.get(`${ API_URL }`);
	},
	getSearch: async function(param) {
		const payload = '%' + param + '%';
		// const API_URL = GRAPHQL;
		const API_URL = PROTOCOL + BASEPATH + GRAPHQL;
		return await axios.post(`${ API_URL }`, {
			query: `
      query searchNewsArticles($query:String!, $limit:Int!, $offset:Int!){
        nodeQuery(limit: $limit, offset: $offset, filter: {
         conjunction: AND,
         groups: [
           {conjunction: OR, conditions: [{field: "title", value: [$query], operator: LIKE}, {field: "body", value: [$query], operator: LIKE}]},
           {conditions: [{operator: EQUAL, field: "type", value: ["article"]}]}
         ]}
         sort: [{
         field: "created"
         direction: DESC
       }]
       )
       {
         entities {
           entityLabel
           entityUrl {
             path
           }
           entityCreated
            ... on NodeArticle {
             created
             fieldNewsCategory {
               entity {
                 ...termFragment
               }
             }
             fieldImage{
               title
               alt
               thumb:derivative(style:TEASER_480X320) {
                 url
                 width
                 height
               }
             }
       }
         }
       }
     }

     fragment termFragment on TaxonomyTermCategory {
       name
       entityUrl {
         path
       }
     }`,
			variables: {
				query: payload,
				limit: 12,
				offset: 0,
			},
		});
	},
	sendContactUs: async function(data) {
		// const API_URL = CONTACTUS;
		const API_URL = PROTOCOL + BASEPATH + CONTACTUS;
		return await axios.post(`${ API_URL }`, { data });
	},
};

export default NPApi;
