class OfferObj {
  constructor(options) {
    this.id = options.id;
    this.outcomeId = options.outcomeId;
    this.salary = options.salary;
    this.companyId = options.companyId;
    this.taken = options.taken;
    this.position = options.position;
    this.createdAt = options.createdAt;
    this.updatedAt = options.updatedAt;
  }
}

export default OfferObj;
