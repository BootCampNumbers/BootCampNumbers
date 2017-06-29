class OutcomeObj {
  constructor(options) {
    this.id = options.user_id;
    this.year = options.year;
    this.email = options.email;
    this.firstName = options.first_name;
    this.lastName = options.last_name;
    this.minority = options.minority;
    this.github = options.github;
    this.bootCampId = options.bootcamp_id;
    this.applicationsSent = options.applications_sent;
    this.monthsToHire = options.months_to_hire;
    this.offers = options.offers;
    this.createdAt = options.created_at;
    this.updatedAt = options.updated_at;
  }
}

export default OutcomeObj;
