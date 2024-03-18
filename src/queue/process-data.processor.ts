import { Process, Processor } from "@nestjs/bull";

@Processor('my-queue')

export class ProcessDataProcessor{
    // @Process('process-data')

    // async handleData(data: any){
    //     console.log('')

    // }

    @Process('send-mail')
    async sendMail(resp: any){
        const {data} = resp;

        data?.forEach((element:any) => {
            setTimeout(() => {
                console.log("sending mail to", element)
            }, 5000)
        });
    }


    @Process('send-salary')
    async sendSalary(res: any){
        const {data} = res;

        data?.forEach((element: any) => {
            setTimeout(() => {
                console.log("Sending salary to ========> ", element);
            }, 5000)
        })
    }

    
    @Process('send-mesage')
    async sendMessages(res: any){
        const {data} = res;

        data?.forEach((element: any) => {
            console.log("Sending messages>>>>>>", element);
        }, 5000)
    }
}