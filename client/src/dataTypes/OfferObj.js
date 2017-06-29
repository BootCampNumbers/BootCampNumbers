class OfferObj {
  constructor(options) {
    this.id = options.id;
    this.taken = options.taken;
    this.outcomeId = options.outcomeId;
    this.salary = options.salary;
    this.companyId = options.companyId;
    this.position = options.position;
    this.createdAt = options.createdAt;
    this.updatedAt = options.updatedAt;
  }
}

export default OfferObj;
