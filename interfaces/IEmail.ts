export default interface IEmail {
    name: string;
    subject: string;
    text: string;
    to?: string;
    from: string
}