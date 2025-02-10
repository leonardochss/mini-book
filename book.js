class Search {
    constructor(data) {
        this.data = data;
    }

    equal(text, keyword) {
        return text.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    }

    byTitle(keyword) {
        for (let i = 0; i < this.data.length; i++) {
            let book = this.data[i];
            let title = book.querySelector(".title").innerText;

            if (this.equal(title, keyword))
                book.style.display = "";
            else
                book.style.display = "none";
        }
    }

    byAuthor(keyword) {
        for (let i = 0; i < this.data.length; i++) {
            let book = this.data[i];
            let author = book.querySelector(".author").innerText;

            if (this.equal(author, keyword))
                book.style.display = "";
            else
                book.style.display = "none";
        }
    }

    byPublisher(keyword) {
        for (let i = 0; i < this.data.length; i++) {
            let book = this.data[i];
            let publisher = book.querySelector(".publisher").innerText;

            if (this.equal(publisher, keyword))
                book.style.display = "";
            else
                book.style.display = "none";
        }
    }

    byYear(keyword) {
        for (let i = 0; i < this.data.length; i++) {
            let book = this.data[i];
            let year = book.querySelector(".year").innerText;

            if (this.equal(year, keyword))
                book.style.display = "";
            else
                book.style.display = "none";
        }
    }
}

let keyword = document.querySelector("#keyword");

function searching() {
    let books = document.querySelectorAll(".book");
    let search = new Search(books);

    let filterType = document.querySelector('input[name="filter"]:checked').value;

    if (filterType === "title") {
        search.byTitle(keyword.value);
    } else if (filterType === "author") {
        search.byAuthor(keyword.value);
    } else if (filterType === "publisher") {
        search.byPublisher(keyword.value);
    } else if (filterType === "year") {
        search.byYear(keyword.value);
    }
}

keyword.addEventListener("keyup", searching);
