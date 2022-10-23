const accordion=document.querySelector('.accordion_content');
const accordionItem=document.querySelector('.accordion_item');
let height=0;

accordionItem.addEventListener('click',()=>{
    if (!height) {
        height=accordion.scrollHeight;
    }else{
        height=0;
    }
    accordion.style.height=`${height}px`;
});

const accordion1=document.querySelector('.accordion_content_1');
const accordionItem1=document.querySelector('.accordion_item_1');
let height1=0;

accordionItem1.addEventListener('click',()=>{
    if (!height) {
        height=accordion.scrollHeight;
    }else{
        height=0;
    }
    accordion1.style.height=`${height}px`;
});
