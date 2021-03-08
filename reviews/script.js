const userData = [
    {
        id: 1,
        imageUrl: `https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg`,
        name: 'Flora Amy',
        profession: 'Web Developer',
        speech: `I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry`
    },
    {
        id: 2,
        imageUrl: `https://images.unsplash.com/photo-1597922182381-a61bbad1c1e4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80`,
        name: 'John Doe',
        profession: 'UI/UX Desiner',
        speech: `I'm a UI/UX Desiner for about 3 years 
        and currently working at The Thech Torch Inc.
        I'm here for some reason. And I wanted to give a better
        review but unfortunately I couldn't find anything so, I just
        added some dummy text here as for example review!!!`
    },
    {
        id: 3,
        imageUrl: `https://images.unsplash.com/photo-1560241804-02b7b1bc9d55?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=628&q=80`,
        name: 'Antonieo Roserio',
        profession: 'SEO Engineer',
        speech: `lorem ipsum dolor sitamet, consectetur adipiscing lorem ipsum dolor sitlorem ipsum dolor sit lorem ipsum dolor sit amet et lorem ipsum dolor sit lorem ipsum dolor sit amet lorem ipsum dolor
        sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet  lorem`
    },
    {
        id: 4,
        imageUrl: `https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80`,
        name: 'Elle Marie',
        profession: 'Full Stack Dev',
        speech: `Sealed letters folded in intricate patterns have gone unread for more than 300 years, but now people have been able to tease out their contents with a combination of X-ray imaging and unfolding algorithms.
            Such folded letters were common before the invention of the envelope.`,
    },
];

const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const randomBtn = document.querySelector('#random');
let imgSrc = document.querySelector('.image-layout > div > img');
let authorName = document.querySelector('#name');
let job = document.querySelector('#job');
let quote = document.querySelector('#quote');

// initially seted user data for first page loading 
imgSrc.setAttribute('src', userData[0].imageUrl);
authorName.textContent = userData[0].name;
job.textContent = userData[0].profession;
quote.textContent = userData[0].speech;

// funcitionality for next button click
let n = 0;
nextBtn.addEventListener('click', function (e) {
    n++;
    if (n > userData.length - 1) {
        n = 0;
    };
    updateUserInfo(n);
});

// funcitionality for prev button click
let p = userData.length;
prevBtn.addEventListener('click', function (e) {
    if (n != 0) {
        n--;
    }else if (n == 0) {
        n = userData.length;
        n--;
    };
    updateUserInfo(n);
});

updateUserInfo = (i) => {
    imgSrc.setAttribute('src', userData[i].imageUrl);
    authorName.textContent = userData[i].name;
    job.textContent = userData[i].profession;
    quote.textContent = userData[i].speech;
};

// funcitionality for random button click
randomBtn.addEventListener('click', function () {
    randomFunc();
});

randomFunc = () => {
    let random = Math.floor(Math.random() * userData.length);
    updateUserInfo(random);
};