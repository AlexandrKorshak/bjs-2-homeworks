class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

	fix() {
		this.state = this._state * 1.5;
	}

	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if (book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		return this.books.find(book => book[type] === value) || null;
	}

	giveBookByName(bookName) {
		const bookIndex = this.books.findIndex(book => book.name === bookName);
		if (bookIndex === -1) {
			return null;
		}
		const [book] = this.books.splice(bookIndex, 1);
		return book;
	}
}


// Реализовываю тестовый сценарий

const testLibrary = new Library("Тестовая библиотека");

testLibrary.addBook(new NovelBook("Лев Толстой", "Война и мир", 1869, 1225));
testLibrary.addBook(new FantasticBook("Айзек Азимов", "Основание", 1951, 320));
testLibrary.addBook(new Magazine("Наука и жизнь", 1919, 80));

let foundBook = testLibrary.findBookBy("releaseDate", 1919);
if (!foundBook) {
	foundBook = new Magazine("Новый журнал", 1919, 50);
	testLibrary.addBook(foundBook);
}
console.log("Найдена книга 1919 года:", foundBook.name);

const issuedBook = testLibrary.giveBookByName("Основание");
console.log("Выдана книга:", issuedBook.name);
console.log("Количество книг после выдачи:", testLibrary.books.length);

issuedBook.state = 20;
console.log("Состояние книги после повреждения:", issuedBook.state);

issuedBook.fix();
console.log("Состояние книги после восстановления:", issuedBook.state);

testLibrary.addBook(issuedBook);
console.log("Количество книг после попытки вернуть:", testLibrary.books.length);