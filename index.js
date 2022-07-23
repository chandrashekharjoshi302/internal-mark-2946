let imagesLink=[
    "https://is3-ssl.mzstatic.com/image/thumb/NcMcLMcSxa5Ho_oOXvUbGg/738x416.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features122/v4/e0/c7/0d/e0c70d56-1c09-1c01-8afb-e98b63189d0a/218c885d-e5db-4e69-ac5c-e70586195e87.lsr/1478x832fe.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/c3/ad/bc/c3adbcdf-bb52-05f0-5ed5-afbdf3c051fa/693e0778-814e-402d-bd89-a87148bca7bc.lsr/1478x832fe.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/cd/43/ed/cd43eda7-4c86-bb98-557d-7fcbf9b9e1c9/5172956a-6ebb-4ea7-bbc8-feb972bde53b.lsr/1478x832fe.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/f3/e6/ad/f3e6ad03-d528-5d77-a99d-07ee16c7ab49/3c0009a5-fc4a-41d7-ac52-43c78942b9b8.lsr/1478x832fe.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/5a/38/94/5a38945f-d9c4-f284-b86a-74c295c0b339/91d7a476-e48a-4514-b179-8f872f810085.lsr/1478x832fe.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features122/v4/e0/c7/0d/e0c70d56-1c09-1c01-8afb-e98b63189d0a/218c885d-e5db-4e69-ac5c-e70586195e87.lsr/1478x832fe.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/c3/ad/bc/c3adbcdf-bb52-05f0-5ed5-afbdf3c051fa/693e0778-814e-402d-bd89-a87148bca7bc.lsr/1478x832fe.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/cd/43/ed/cd43eda7-4c86-bb98-557d-7fcbf9b9e1c9/5172956a-6ebb-4ea7-bbc8-feb972bde53b.lsr/1478x832fe.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/f3/e6/ad/f3e6ad03-d528-5d77-a99d-07ee16c7ab49/3c0009a5-fc4a-41d7-ac52-43c78942b9b8.lsr/1478x832fe.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/5a/38/94/5a38945f-d9c4-f284-b86a-74c295c0b339/91d7a476-e48a-4514-b179-8f872f810085.lsr/1478x832fe.webp",
    
]

let leftBtn=document.getElementById("left-btn1");
let rightBtn=document.getElementById("Right-btn1");
let crauser=document.getElementById("crauser");
let imageState =0;
rightBtn.addEventListener("click",function(){
    imageState++;
    if(imageState===imagesLink.length){
        imageState=0;
    }
    crauser.src=imagesLink[imageState];
})

leftBtn.addEventListener("click",function(){
    imageState--;
    if(imageState<0){
        imageState=imagesLink.length-1;
    }
    crauser.src=imagesLink[imageState];
})

let imagesLink2=[
    "https://is2-ssl.mzstatic.com/image/thumb/d9YbWy1AerS9BZSiyoQ0Lw/1478x832.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/neRAWaMZZ5xVz4fnbFXJUA/738x416.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/XiXPs1AKOFQE7cq7AVlJeQ/738x416.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/738x416.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/y-GzfKyC0y6x5Dd8254GpQ/738x416.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/1478x832.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features122/v4/e0/c7/0d/e0c70d56-1c09-1c01-8afb-e98b63189d0a/218c885d-e5db-4e69-ac5c-e70586195e87.lsr/1478x832fe.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/c3/ad/bc/c3adbcdf-bb52-05f0-5ed5-afbdf3c051fa/693e0778-814e-402d-bd89-a87148bca7bc.lsr/1478x832fe.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/cd/43/ed/cd43eda7-4c86-bb98-557d-7fcbf9b9e1c9/5172956a-6ebb-4ea7-bbc8-feb972bde53b.lsr/1478x832fe.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/f3/e6/ad/f3e6ad03-d528-5d77-a99d-07ee16c7ab49/3c0009a5-fc4a-41d7-ac52-43c78942b9b8.lsr/1478x832fe.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/5a/38/94/5a38945f-d9c4-f284-b86a-74c295c0b339/91d7a476-e48a-4514-b179-8f872f810085.lsr/1478x832fe.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features122/v4/e0/c7/0d/e0c70d56-1c09-1c01-8afb-e98b63189d0a/218c885d-e5db-4e69-ac5c-e70586195e87.lsr/1478x832fe.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/c3/ad/bc/c3adbcdf-bb52-05f0-5ed5-afbdf3c051fa/693e0778-814e-402d-bd89-a87148bca7bc.lsr/1478x832fe.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/cd/43/ed/cd43eda7-4c86-bb98-557d-7fcbf9b9e1c9/5172956a-6ebb-4ea7-bbc8-feb972bde53b.lsr/1478x832fe.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/f3/e6/ad/f3e6ad03-d528-5d77-a99d-07ee16c7ab49/3c0009a5-fc4a-41d7-ac52-43c78942b9b8.lsr/1478x832fe.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/5a/38/94/5a38945f-d9c4-f284-b86a-74c295c0b339/91d7a476-e48a-4514-b179-8f872f810085.lsr/1478x832fe.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/neRAWaMZZ5xVz4fnbFXJUA/738x416.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/XiXPs1AKOFQE7cq7AVlJeQ/738x416.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/738x416.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/y-GzfKyC0y6x5Dd8254GpQ/738x416.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/1478x832.webp",
    
    
]

let leftBtn2=document.getElementById("left-btn2");
let rightBtn2=document.getElementById("Right-btn2");
let crauser2=document.getElementById("crauser2");
let imageState2 =0;
rightBtn2.addEventListener("click",function(){
    imageState2++;
    if(imageState2===imagesLink2.length){
        imageState2=0;
    }
    crauser2.src=imagesLink2[imageState2];
})

leftBtn2.addEventListener("click",function(){
    imageState2--;
    if(imageState2<0){
        imageState2=imagesLink2.length-1;
    }
    crauser2.src=imagesLink2[imageState2];
})


let imagesLink3=[
    "https://is1-ssl.mzstatic.com/image/thumb/QiFf4rD5DY65HbtJUOjE7Q/738x416.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/neRAWaMZZ5xVz4fnbFXJUA/738x416.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/XiXPs1AKOFQE7cq7AVlJeQ/738x416.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/738x416.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/y-GzfKyC0y6x5Dd8254GpQ/738x416.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/1478x832.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features122/v4/e0/c7/0d/e0c70d56-1c09-1c01-8afb-e98b63189d0a/218c885d-e5db-4e69-ac5c-e70586195e87.lsr/1478x832fe.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/c3/ad/bc/c3adbcdf-bb52-05f0-5ed5-afbdf3c051fa/693e0778-814e-402d-bd89-a87148bca7bc.lsr/1478x832fe.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/cd/43/ed/cd43eda7-4c86-bb98-557d-7fcbf9b9e1c9/5172956a-6ebb-4ea7-bbc8-feb972bde53b.lsr/1478x832fe.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/f3/e6/ad/f3e6ad03-d528-5d77-a99d-07ee16c7ab49/3c0009a5-fc4a-41d7-ac52-43c78942b9b8.lsr/1478x832fe.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/5a/38/94/5a38945f-d9c4-f284-b86a-74c295c0b339/91d7a476-e48a-4514-b179-8f872f810085.lsr/1478x832fe.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features122/v4/e0/c7/0d/e0c70d56-1c09-1c01-8afb-e98b63189d0a/218c885d-e5db-4e69-ac5c-e70586195e87.lsr/1478x832fe.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/c3/ad/bc/c3adbcdf-bb52-05f0-5ed5-afbdf3c051fa/693e0778-814e-402d-bd89-a87148bca7bc.lsr/1478x832fe.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/cd/43/ed/cd43eda7-4c86-bb98-557d-7fcbf9b9e1c9/5172956a-6ebb-4ea7-bbc8-feb972bde53b.lsr/1478x832fe.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/f3/e6/ad/f3e6ad03-d528-5d77-a99d-07ee16c7ab49/3c0009a5-fc4a-41d7-ac52-43c78942b9b8.lsr/1478x832fe.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/5a/38/94/5a38945f-d9c4-f284-b86a-74c295c0b339/91d7a476-e48a-4514-b179-8f872f810085.lsr/1478x832fe.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/neRAWaMZZ5xVz4fnbFXJUA/738x416.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/XiXPs1AKOFQE7cq7AVlJeQ/738x416.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/738x416.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/y-GzfKyC0y6x5Dd8254GpQ/738x416.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/1478x832.webp",
    
    
]


let leftBtn3=document.getElementById("left-btn3");
let rightBtn3=document.getElementById("Right-btn3");
let crauser3=document.getElementById("crauser3");
let imageState3 =0;
rightBtn3.addEventListener("click",function(){
    imageState3++;
    if(imageState3===imagesLink3.length){
        imageState3=0;
    }
    crauser3.src=imagesLink3[imageState3];
})

leftBtn3.addEventListener("click",function(){
    imageState3--;
    if(imageState3<0){
        imageState3=imagesLink3.length-1;
    }
    crauser3.src=imagesLink3[imageState3];
})



let imagesLink4=[
    "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/neRAWaMZZ5xVz4fnbFXJUA/738x416.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/XiXPs1AKOFQE7cq7AVlJeQ/738x416.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/738x416.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/y-GzfKyC0y6x5Dd8254GpQ/738x416.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/1478x832.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features122/v4/e0/c7/0d/e0c70d56-1c09-1c01-8afb-e98b63189d0a/218c885d-e5db-4e69-ac5c-e70586195e87.lsr/1478x832fe.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/c3/ad/bc/c3adbcdf-bb52-05f0-5ed5-afbdf3c051fa/693e0778-814e-402d-bd89-a87148bca7bc.lsr/1478x832fe.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/cd/43/ed/cd43eda7-4c86-bb98-557d-7fcbf9b9e1c9/5172956a-6ebb-4ea7-bbc8-feb972bde53b.lsr/1478x832fe.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/f3/e6/ad/f3e6ad03-d528-5d77-a99d-07ee16c7ab49/3c0009a5-fc4a-41d7-ac52-43c78942b9b8.lsr/1478x832fe.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/5a/38/94/5a38945f-d9c4-f284-b86a-74c295c0b339/91d7a476-e48a-4514-b179-8f872f810085.lsr/1478x832fe.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features122/v4/e0/c7/0d/e0c70d56-1c09-1c01-8afb-e98b63189d0a/218c885d-e5db-4e69-ac5c-e70586195e87.lsr/1478x832fe.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/c3/ad/bc/c3adbcdf-bb52-05f0-5ed5-afbdf3c051fa/693e0778-814e-402d-bd89-a87148bca7bc.lsr/1478x832fe.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/cd/43/ed/cd43eda7-4c86-bb98-557d-7fcbf9b9e1c9/5172956a-6ebb-4ea7-bbc8-feb972bde53b.lsr/1478x832fe.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/f3/e6/ad/f3e6ad03-d528-5d77-a99d-07ee16c7ab49/3c0009a5-fc4a-41d7-ac52-43c78942b9b8.lsr/1478x832fe.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/5a/38/94/5a38945f-d9c4-f284-b86a-74c295c0b339/91d7a476-e48a-4514-b179-8f872f810085.lsr/1478x832fe.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/neRAWaMZZ5xVz4fnbFXJUA/738x416.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/XiXPs1AKOFQE7cq7AVlJeQ/738x416.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/738x416.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/y-GzfKyC0y6x5Dd8254GpQ/738x416.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/1478x832.webp",
    
    
]

let leftBtn4=document.getElementById("left-btn4");
let rightBtn4=document.getElementById("Right-btn4");
let crauser4=document.getElementById("crauser4");
let imageState4 =0;
rightBtn4.addEventListener("click",function(){
    imageState4++;
    if(imageState4===imagesLink4.length){
        imageState4=0;
    }
    crauser4.src=imagesLink4[imageState4];
})

leftBtn4.addEventListener("click",function(){
    imageState4--;
    if(imageState4<0){
        imageState4=imagesLink4.length-1;
    }
    crauser4.src=imagesLink4[imageState4];
})


let imagesLink5=[
    "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/neRAWaMZZ5xVz4fnbFXJUA/738x416.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/XiXPs1AKOFQE7cq7AVlJeQ/738x416.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/738x416.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/y-GzfKyC0y6x5Dd8254GpQ/738x416.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/1478x832.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features122/v4/e0/c7/0d/e0c70d56-1c09-1c01-8afb-e98b63189d0a/218c885d-e5db-4e69-ac5c-e70586195e87.lsr/1478x832fe.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/c3/ad/bc/c3adbcdf-bb52-05f0-5ed5-afbdf3c051fa/693e0778-814e-402d-bd89-a87148bca7bc.lsr/1478x832fe.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/cd/43/ed/cd43eda7-4c86-bb98-557d-7fcbf9b9e1c9/5172956a-6ebb-4ea7-bbc8-feb972bde53b.lsr/1478x832fe.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/f3/e6/ad/f3e6ad03-d528-5d77-a99d-07ee16c7ab49/3c0009a5-fc4a-41d7-ac52-43c78942b9b8.lsr/1478x832fe.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/5a/38/94/5a38945f-d9c4-f284-b86a-74c295c0b339/91d7a476-e48a-4514-b179-8f872f810085.lsr/1478x832fe.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features122/v4/e0/c7/0d/e0c70d56-1c09-1c01-8afb-e98b63189d0a/218c885d-e5db-4e69-ac5c-e70586195e87.lsr/1478x832fe.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/c3/ad/bc/c3adbcdf-bb52-05f0-5ed5-afbdf3c051fa/693e0778-814e-402d-bd89-a87148bca7bc.lsr/1478x832fe.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/cd/43/ed/cd43eda7-4c86-bb98-557d-7fcbf9b9e1c9/5172956a-6ebb-4ea7-bbc8-feb972bde53b.lsr/1478x832fe.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/f3/e6/ad/f3e6ad03-d528-5d77-a99d-07ee16c7ab49/3c0009a5-fc4a-41d7-ac52-43c78942b9b8.lsr/1478x832fe.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/5a/38/94/5a38945f-d9c4-f284-b86a-74c295c0b339/91d7a476-e48a-4514-b179-8f872f810085.lsr/1478x832fe.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/neRAWaMZZ5xVz4fnbFXJUA/738x416.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/XiXPs1AKOFQE7cq7AVlJeQ/738x416.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/738x416.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/y-GzfKyC0y6x5Dd8254GpQ/738x416.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/1478x832.webp",
    
    
]

let leftBtn5=document.getElementById("left-btn5");
let rightBtn5=document.getElementById("Right-btn5");
let crauser5=document.getElementById("crauser5");
let imageState5 =0;
rightBtn5.addEventListener("click",function(){
    imageState5++;
    if(imageState5===imagesLink5.length){
        imageState5=0;
    }
    crauser5.src=imagesLink5[imageState5];
})

leftBtn5.addEventListener("click",function(){
    imageState5--;
    if(imageState5<0){
        imageState5=imagesLink5.length-1;
    }
    crauser5.src=imagesLink2[imageState5];
})


let imagesLink6=[
    "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/neRAWaMZZ5xVz4fnbFXJUA/738x416.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/XiXPs1AKOFQE7cq7AVlJeQ/738x416.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/738x416.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/y-GzfKyC0y6x5Dd8254GpQ/738x416.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/1478x832.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features122/v4/e0/c7/0d/e0c70d56-1c09-1c01-8afb-e98b63189d0a/218c885d-e5db-4e69-ac5c-e70586195e87.lsr/1478x832fe.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/c3/ad/bc/c3adbcdf-bb52-05f0-5ed5-afbdf3c051fa/693e0778-814e-402d-bd89-a87148bca7bc.lsr/1478x832fe.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/cd/43/ed/cd43eda7-4c86-bb98-557d-7fcbf9b9e1c9/5172956a-6ebb-4ea7-bbc8-feb972bde53b.lsr/1478x832fe.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/f3/e6/ad/f3e6ad03-d528-5d77-a99d-07ee16c7ab49/3c0009a5-fc4a-41d7-ac52-43c78942b9b8.lsr/1478x832fe.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/5a/38/94/5a38945f-d9c4-f284-b86a-74c295c0b339/91d7a476-e48a-4514-b179-8f872f810085.lsr/1478x832fe.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features122/v4/e0/c7/0d/e0c70d56-1c09-1c01-8afb-e98b63189d0a/218c885d-e5db-4e69-ac5c-e70586195e87.lsr/1478x832fe.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/c3/ad/bc/c3adbcdf-bb52-05f0-5ed5-afbdf3c051fa/693e0778-814e-402d-bd89-a87148bca7bc.lsr/1478x832fe.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/cd/43/ed/cd43eda7-4c86-bb98-557d-7fcbf9b9e1c9/5172956a-6ebb-4ea7-bbc8-feb972bde53b.lsr/1478x832fe.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/f3/e6/ad/f3e6ad03-d528-5d77-a99d-07ee16c7ab49/3c0009a5-fc4a-41d7-ac52-43c78942b9b8.lsr/1478x832fe.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/5a/38/94/5a38945f-d9c4-f284-b86a-74c295c0b339/91d7a476-e48a-4514-b179-8f872f810085.lsr/1478x832fe.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/neRAWaMZZ5xVz4fnbFXJUA/738x416.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/XiXPs1AKOFQE7cq7AVlJeQ/738x416.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/738x416.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/y-GzfKyC0y6x5Dd8254GpQ/738x416.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/1478x832.webp",
    
    
]

let leftBtn6=document.getElementById("left-btn6");
let rightBtn6=document.getElementById("Right-btn6");
let crauser6=document.getElementById("crauser6");
let imageState6 =0;
rightBtn6.addEventListener("click",function(){
    imageState6++;
    if(imageState6===imagesLink6.length){
        imageState6=0;
    }
    crauser6.src=imagesLink6[imageState6];
})

leftBtn6.addEventListener("click",function(){
    imageState6--;
    if(imageState6<0){
        imageState6=imagesLink6.length-1;
    }
    crauser6.src=imagesLink6[imageState6];
})

let imagesLink7=[
    "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/neRAWaMZZ5xVz4fnbFXJUA/738x416.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/XiXPs1AKOFQE7cq7AVlJeQ/738x416.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/738x416.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/y-GzfKyC0y6x5Dd8254GpQ/738x416.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/1478x832.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features122/v4/e0/c7/0d/e0c70d56-1c09-1c01-8afb-e98b63189d0a/218c885d-e5db-4e69-ac5c-e70586195e87.lsr/1478x832fe.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/c3/ad/bc/c3adbcdf-bb52-05f0-5ed5-afbdf3c051fa/693e0778-814e-402d-bd89-a87148bca7bc.lsr/1478x832fe.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/cd/43/ed/cd43eda7-4c86-bb98-557d-7fcbf9b9e1c9/5172956a-6ebb-4ea7-bbc8-feb972bde53b.lsr/1478x832fe.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/f3/e6/ad/f3e6ad03-d528-5d77-a99d-07ee16c7ab49/3c0009a5-fc4a-41d7-ac52-43c78942b9b8.lsr/1478x832fe.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/5a/38/94/5a38945f-d9c4-f284-b86a-74c295c0b339/91d7a476-e48a-4514-b179-8f872f810085.lsr/1478x832fe.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features122/v4/e0/c7/0d/e0c70d56-1c09-1c01-8afb-e98b63189d0a/218c885d-e5db-4e69-ac5c-e70586195e87.lsr/1478x832fe.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/Features122/v4/c3/ad/bc/c3adbcdf-bb52-05f0-5ed5-afbdf3c051fa/693e0778-814e-402d-bd89-a87148bca7bc.lsr/1478x832fe.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/Features122/v4/cd/43/ed/cd43eda7-4c86-bb98-557d-7fcbf9b9e1c9/5172956a-6ebb-4ea7-bbc8-feb972bde53b.lsr/1478x832fe.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/Features112/v4/f3/e6/ad/f3e6ad03-d528-5d77-a99d-07ee16c7ab49/3c0009a5-fc4a-41d7-ac52-43c78942b9b8.lsr/1478x832fe.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/Features122/v4/5a/38/94/5a38945f-d9c4-f284-b86a-74c295c0b339/91d7a476-e48a-4514-b179-8f872f810085.lsr/1478x832fe.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/AWDRdQz0nepFpnsUNiTDuw/738x416.webp",
    "https://is3-ssl.mzstatic.com/image/thumb/neRAWaMZZ5xVz4fnbFXJUA/738x416.webp",
    "https://is4-ssl.mzstatic.com/image/thumb/XiXPs1AKOFQE7cq7AVlJeQ/738x416.webp",
    "https://is1-ssl.mzstatic.com/image/thumb/vPnF3gIE_xEMoXPI1SyluA/738x416.webp",
    "https://is5-ssl.mzstatic.com/image/thumb/y-GzfKyC0y6x5Dd8254GpQ/738x416.webp",
    "https://is2-ssl.mzstatic.com/image/thumb/WTDZpzkQlaatpb1X4w9jZg/1478x832.webp",
    
    
]


let leftBtn7=document.getElementById("left-btn7");
let rightBtn7=document.getElementById("Right-btn7");
let crauser7=document.getElementById("crauser7");
let imageState7 =0;
rightBtn7.addEventListener("click",function(){
    imageState7++;
    if(imageState7===imagesLink7.length){
        imageState7=0;
    }
    crauser7.src=imagesLink7[imageState7];
})

leftBtn7.addEventListener("click",function(){
    imageState7--;
    if(imageState7<0){
        imageState7=imagesLink7.length-1;
    }
    crauser7.src=imagesLink7[imageState7];
})
var faq = document.getElementsByClassName("faq-page");
var i;

for (i = 0; i < faq.length; i++) {
    faq[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var body = this.nextElementSibling;
        if (body.style.display === "block") {
            body.style.display = "none";
        } else {
            body.style.display = "block";
        }
    });
}