class ApiFeature {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    filter() {
        const queryObj = { ...this.queryString };
        const excludeFields = ["page", "sort", "limit", "field"];
        const queryFilter = {};
        for (const field in queryObj) {
            if (!excludeFields.includes(field)) {
                queryFilter[field] = queryObj[field];
            }
        }
        this.query = this.query.find(queryFilter);

        return this;
    }
    sort() {
        if (this.queryString.sort) {
            const sortBy = this.query.sort.split(",").join(" ");
            this.query = this.query.sort(sortBy);
        }

        return this;
    }

    paginate() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 1;
        this.query = this.query.skip((page - 1) * limit).limit(limit);
        return this;
    }
}

module.exports = ApiFeature;
