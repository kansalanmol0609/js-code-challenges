class Book {
	title;
	author;
	ISBN;
	available_copies;

	constructor(title, author, ISBN, available_copies) {
		this.title = title;
		this.author = author;
		this.ISBN = ISBN;
		this.available_copies = available_copies;
	}

	get availability() {
		if (this.available_copies === 0) return "Out of stock";
		if (this.available_copies < 10) return "Low stock";
		return "In stock";
	}

	sell(qty = 1) {
		this.available_copies -= qty;
	}

	restock(qty = 5) {
		this.available_copies += qty;
	}
}
