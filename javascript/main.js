//FOR THE DECORATIVE BLOCKS

const left = document.querySelector('.left__column');
const content = left.querySelector('article');
const protos = document.querySelectorAll('.proto');


left.addEventListener('mousemove', (event) => {
    const move = (event.clientX *0.05) + 4;
    const move2 = (event.clientX *0.003);

    content.style.transform = `translateX(-${move2}%)`;
    protos.forEach(proto => proto.style.transform = `translateX(${move}%) skew(30deg, 0deg)`)
})