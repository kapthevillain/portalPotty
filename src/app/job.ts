export class Job {
    constructor(
        public jobid: string,
        public jobname: string,
        public company: string,
        public address: string,
        public startdate: string,
        public enddate: string,
        public phone: string,
        public lat: string,
        public long: string
    ){}
}
