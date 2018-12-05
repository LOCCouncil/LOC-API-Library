declare module 'loc-api-library' {
    export class getApplicationData {
        constructor(id: string, authorization: string);
        public data: {
            client: {
                name: string,
                id: string,
                owner: string,
                prefix: string
            },
            approval: {
                type: string,
                staff: string,
                time: Date
            }
        }
    }
    export class putMemberSelfRole {
        constructor(userID: string, roleID: string, authorization: string)
    }
}