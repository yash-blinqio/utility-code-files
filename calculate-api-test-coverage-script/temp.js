┌─────────┬──────────────────────────────────────────────────┬───────┬────────────────────────┐
│ (index) │ endpoint                                         │ count │ verdict                │
├─────────┼──────────────────────────────────────────────────┼───────┼────────────────────────┤
│ 0       │ 'GET /api/auth/getAccessKeyById'                 │ 1     │ '✅ Basic Coverage'    │
│ 1       │ 'GET /api/auth/getAccessKeys'                    │ 1     │ '✅ Basic Coverage'    │
│ 2       │ 'DELETE /api/auth/deleteAccessKey'               │ 1     │ '✅ Basic Coverage'    │
│ 3       │ 'POST /api/auth/createAccessKey'                 │ 1     │ '✅ Basic Coverage'    │
│ 4       │ 'GET /api/auth/getAccessKeyByToken'              │ 0     │ '❌ No Coverage'       │
│ 5       │ 'GET /api/auth/getUsersCount'                    │ 0     │ '❌ No Coverage'       │
│ 6       │ 'POST /api/auth/getUsersByPage/:current_page'    │ 0     │ '❌ No Coverage'       │
│ 7       │ 'POST /api/auth/updateAllowedProjectsCount'      │ 0     │ '❌ No Coverage'       │
│ 8       │ 'DELETE /api/auth/invitations/:id'               │ 0     │ '❌ No Coverage'       │
│ 9       │ 'POST /api/auth/verify-invitation'               │ 0     │ '❌ No Coverage'       │
│ 10      │ 'POST /api/auth/log'                             │ 0     │ '❌ No Coverage'       │
│ 11      │ 'POST /api/auth/getProjectByAccessKey'           │ 7     │ '✅ Heavy Coverage'    │
│ 12      │ 'GET /api/auth/getProjects'                      │ 1     │ '✅ Basic Coverage'    │
│ 13      │ 'POST /api/auth/createProject'                   │ 10    │ '✅ Heavy Coverage'    │
│ 14      │ 'GET /api/auth/getLastActiveProject'             │ 1     │ '✅ Basic Coverage'    │
│ 15      │ 'POST /api/auth/updateLastActiveProjectId'       │ 2     │ '✅ Moderate Coverage' │
│ 16      │ 'POST /api/auth/verifyProject'                   │ 1     │ '✅ Basic Coverage'    │
│ 17      │ 'GET /api/auth/getMembers'                       │ 3     │ '✅ Moderate Coverage' │
│ 18      │ 'POST /api/auth/addMember'                       │ 7     │ '✅ Heavy Coverage'    │
│ 19      │ 'DELETE /api/auth/remove-member-or-invitation'   │ 0     │ '❌ No Coverage'       │
│ 20      │ 'POST /api/auth/checkRole'                       │ 0     │ '❌ No Coverage'       │
│ 21      │ 'POST /api/auth/isProjectExpired'                │ 1     │ '✅ Basic Coverage'    │
│ 22      │ 'POST /api/auth/isProjectExpired-lib'            │ 0     │ '❌ No Coverage'       │
│ 23      │ 'GET /api/auth/getAllowedProjectsCount'          │ 0     │ '❌ No Coverage'       │
│ 24      │ 'GET /api/auth/getAllowedProjectsCount-lib'      │ 0     │ '❌ No Coverage'       │
│ 25      │ 'POST /api/auth/getProjectsByPage/:current_page' │ 0     │ '❌ No Coverage'       │
│ 26      │ 'POST /api/auth/setProjectExpiration'            │ 0     │ '❌ No Coverage'       │
│ 27      │ 'GET /api/auth/purge'                            │ 0     │ '❌ No Coverage'       │
│ 28      │ 'POST /api/auth/signup'                          │ 0     │ '❌ No Coverage'       │
│ 29      │ 'POST /api/auth/signup-and-create-project'       │ 1     │ '✅ Basic Coverage'    │
│ 30      │ 'GET /api/auth/test'                             │ 1     │ '✅ Basic Coverage'    │
│ 31      │ 'POST /api/auth/validate-user'                   │ 1     │ '✅ Basic Coverage'    │
│ 32      │ 'POST /api/auth/validateAccessKey'               │ 1     │ '✅ Basic Coverage'    │
│ 33      │ 'POST /api/auth/validateSessionToken'            │ 0     │ '❌ No Coverage'       │
│ 34      │ 'GET /api/auth/validateCRM'                      │ 0     │ '❌ No Coverage'       │
│ 35      │ 'GET /api/auth/validateApiGateway'               │ 0     │ '❌ No Coverage'       │
│ 36      │ 'GET /api/auth/get-whitelist'                    │ 0     │ '❌ No Coverage'       │
│ 37      │ 'POST /api/auth/add-whitelist'                   │ 0     │ '❌ No Coverage'       │
│ 38      │ 'DELETE /api/auth/delete-whitelist'              │ 0     │ '❌ No Coverage'       │
│ 39      │ 'GET /api/auth/isDomainApproved'                 │ 0     │ '❌ No Coverage'       │
│ 40      │ 'POST /api/auth/create-workspace'                │ 0     │ '❌ No Coverage'       │
└─────────┴──────────────────────────────────────────────────┴───────┴────────────────────────┘
