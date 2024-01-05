type userId = string;

export interface Chat{
    userId:userId;
    name:string;
    message:string;
    upvotes:userId[];
}


export abstract class Store{
    constructor(){

    }

    initRoom(){

    }

    getChats(room:string,limit:number,offset:number){

    }

    addChat(room:string,limit:number,offset:number){

    }

    upvote(room:string,chatId:string){

    }
}