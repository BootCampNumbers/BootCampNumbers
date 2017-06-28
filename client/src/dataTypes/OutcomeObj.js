class OutcomeObj {
  constructor(options) {
    this.id = options.id;
    this.bootCampId = options.bootCampId;
    this.year = options.year;
    this.applicationsSent = options.applicationsSent;
    this.numberOfInterviews = options.numberOfInterviews;
    this.daysToHire = options.daysToHire;
    this.offers = options.offers;
    this.createdAt = options.createdAt;
    this.updatedAt = options.updatedAt;
  }
}

export default OutcomeObj;
