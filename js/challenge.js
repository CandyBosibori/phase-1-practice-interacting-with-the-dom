
let playing = true;
let interval;

const timer = () => {
    return setInterval(() => {
        const counter = document.getElementById("counter");
        let count = parseInt(counter.innerText);
        counter.innerText = count + 1;
    }, 1000);
};

interval = timer();

const decrementCounter = () => {
    const counter = document.getElementById("counter");
    let count = parseInt(counter.innerText);
    counter.innerText = count - 1;
};

const incrementCounter = () => {
    const counter = document.getElementById("counter");
    let count = parseInt(counter.innerText);
    counter.innerText = count + 1;
};

const likeCounter = () => {
    const counter = document.getElementById("counter");
    let count = parseInt(counter.innerText);

    const likesContainer = document.querySelector(".likes");
    let existingLike = [...likesContainer.children].find(like => parseInt(like.dataset.num) === count);

    if (existingLike) {
        let likeCount = parseInt(existingLike.children[0].innerText);
        existingLike.innerHTML = `${count} has been liked <span>${likeCount + 1}</span> times`;
    } else {
        const newLike = document.createElement("li");
        newLike.setAttribute("data-num", count);
        newLike.innerHTML = `${count} has been liked <span>1</span> time`;
        likesContainer.appendChild(newLike);
    }
};

const togglePlayPause = () => {
    playing ? (playing = false, clearInterval(interval)) : (playing = true, interval = timer());
    pause.innerText = playing ? "pause" : "resume";
    document.querySelectorAll("button:not(#pause)").forEach(button => button.disabled = !playing);
};

const addComment = (comment) => {
    const commentsContainer = document.querySelector(".comments");
    const newComment = document.createElement("p");
    newComment.innerText = comment;
    commentsContainer.appendChild(newComment);
};

document.getElementById("minus").addEventListener("click", decrementCounter);
document.getElementById("plus").addEventListener("click", incrementCounter);
document.getElementById("heart").addEventListener("click", likeCounter);
document.getElementById("pause").addEventListener("click", togglePlayPause);

document.getElementById("comment-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const input = document.getElementById("comment-input");
    const comment = input.value;
    input.value = "";
    addComment(comment);
});