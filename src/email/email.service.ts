import { MailerService } from '@nestjs-modules/mailer';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
    constructor (private readonly mailService: MailerService){}

    async sendEmail(options: { email: string; subject: string; html: string}) {
      try {
        const message = {
          to: options.email,
          subject: options.subject,
          html: options.html
        };
        const emailSend = await this.mailService.sendMail({
          ...message,
        });
        return emailSend;
      } catch (error) {
        throw new HttpException('Error', HttpStatus.INTERNAL_SERVER_ERROR);
      }
    }
}