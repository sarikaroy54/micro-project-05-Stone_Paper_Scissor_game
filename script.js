const comp_score = document.querySelector('#comp-score');
const your_score = document.querySelector('#your-score');
const game = document.querySelector('.game');

const stone = document.querySelectorAll('.stone_in');
const scissor = document.querySelectorAll('.scissor_in');
const paper = document.querySelectorAll('.paper_in');

const tie = document.querySelector('.tie')
const computer_win = document.querySelector('.computer-win');
const user_win = document.querySelector('.user-win');

const tie_user_image = document.querySelector('.tie-user-image');
const tie_pc_image = document.querySelector('.tie-pc-image');
const insert_user_win = document.querySelector('.insert-user-win');
const pc_img = document.querySelector('.pc-img');
const change = document.querySelector('.change');
const insert_computer_win = document.querySelector('.insert-computer-win');

const play_again_computer = document.querySelector('.play_again_computer');
const play_again_user = document.querySelector('#play_again_user');
const play_again_tie = document.querySelector('#play_again_tie');
const play_again_user_win_nextpage = document.querySelector('#play_again_user_win_nextpage');

const play = document.querySelector('.play');



const game_rule_btn = document.querySelector('.game-rule-btn');
const game_rule_guidelines = document.querySelector('.game-rule-guidelines');
const game_cross_button = document.querySelector('.game-cross-button');

const computer_rule_btn = document.querySelector('.computer-rule-btn');
const computer_rule_guidelines = document.querySelector('.computer-rule-guidelines');
const computer_cross_button = document.querySelector('.computer-cross-button');

const user_rule_btn = document.querySelector('.user-rule-btn');
const user_rule_guidelines = document.querySelector('.user-rule-guidelines');
const user_cross_button = document.querySelector('.user-cross-button');

const tie_rule_btn = document.querySelector('.tie-rule-btn');
const tie_rule_guidelines = document.querySelector('.tie-rule-guidelines');
const tie_cross_button = document.querySelector('.tie-cross-button');





let comp = parseInt(localStorage.getItem("computer")) || 0;
let your = parseInt(localStorage.getItem("yours")) || 0;


comp_score.innerHTML = `${comp}`;
your_score.innerHTML = `${your}`;

function update_score(){
  comp_score.innerHTML = `${comp}`;
your_score.innerHTML = `${your}`;

localStorage.setItem("computer", comp);
localStorage.setItem("yours", your);

}

function hide(element) {
  element.style.display = 'none';
}

function show(element) {
  element.style.display = 'block';
}

function toggleVisibility_show(element) {
  element.style.opacity = 1;
}

function toggleVisibility_hide(element) {
  element.style.opacity = 0;
}

function random(){
  const random_val = Math.floor(Math.random()*3 + 1);  //floor=value will be approxed to the lower one . ex- 2.3 = 2
  return random_val;
}
function replay() {
  show(game);
  hide(play);
  hide(computer_win);
  hide(user_win);
  hide(tie);
}

let arraystone = Array.from(stone);
for(let i=0; i<=arraystone.length-1; i++){
  arraystone[i].addEventListener('click', () => {
    hide(game);
    show(play)
    const random_value = random();
    console.log(random_value);
    if(random_value == 1){
      tie_user_image.innerHTML = `<div class="tie-user-img-stone">
      <img src="./images/stone.png" alt="stone-circle" class="tie-image-icon">
    </div>`
    tie_pc_image.innerHTML = `<div class="tie-pc-img-stone">
    <img src="./images/stone.png" alt="scissor-circle" class="tie-pc-image-icon">
  </div>`

      show(tie); //both stone
      console.log("tie");

      play_again_tie.addEventListener('click', replay);

    }
    else if(random_value == 2){
      insert_user_win.innerHTML = `<div class="user-img-stone">
      <img src="./images/stone.png" alt="stone-circle">
    </div>`
    pc_img.innerHTML = `<div class="pc-img-scissor">
    <img src="./images/scissor.png" alt="scissor-circle" class="pc-img-icon">
  </div>`

  your = your + 1;
  update_score();

      show(user_win); //user-stone pc-scissor
      console.log("user - win");

      play_again_user.addEventListener('click', replay);

    }
    else{
      change.innerHTML = `<div class="user-image-stone">
      <img src="./images/stone.png" alt="stone" class="user-image-icon">
    </div> `
    insert_computer_win.innerHTML = `<div class="pc-image-paper">
    <img src="./images/paper.png" alt="scissor" class="pc-image-icon">
  </div>`

  comp = comp + 1;
  update_score();
      show(computer_win); // user-stone pc-paper
      console.log("computer-win");

      play_again_computer.addEventListener('click', replay);
    }
  });
}

let arrayscissor = Array.from(scissor);
for(let i=0; i<=arrayscissor.length-1; i++){
  arrayscissor[i].addEventListener('click', () => {
    hide(game);
    show(play)
    const random_value = random();
    console.log(random_value);
    if(random_value == 1){
      change.innerHTML = `<div class="user-image-scissor">
      <img src="./images/scissor.png" alt="stone" class="user-image-icon">
    </div> `
    insert_computer_win.innerHTML = `<div class="pc-image-stone">
    <img src="./images/stone.png" alt="scissor" class="pc-image-icon">
  </div>`

  comp = comp + 1;
  update_score();


      show(computer_win); // user-scissor, comp-stone
      console.log("computer_win");

      play_again_computer.addEventListener('click', replay);

    }else if (random_value==2) {
      tie_user_image.innerHTML = `<div class="tie-user-img-scissor">
      <img src="./images/scissor.png" alt="stone-circle" class="tie-image-icon">
    </div>`
    tie_pc_image.innerHTML = `<div class="tie-pc-img-scissor">
    <img src="./images/scissor.png" alt="scissor-circle" class="tie-pc-image-icon">
  </div>`

      show(tie); // user-scissor, comp-scissor
      console.log("tie");

      play_again_tie.addEventListener('click', replay);
    }
    else{
      insert_user_win.innerHTML = `<div class="user-img-scissor">
      <img src="./images/scissor.png" alt="stone-circle">
    </div>`
    pc_img.innerHTML = `<div class="pc-img-paper">
    <img src="./images/paper.png" alt="scissor-circle" class="pc-img-icon">
  </div>`

  your = your + 1;
  update_score();

      show(user_win); // user-scissor, comp-paper
      console.log("user_win");

      play_again_user.addEventListener('click', replay);

    }

  });
}

let arraypaper = Array.from(paper);
for(let i=0; i<=arraypaper.length-1; i++){
  arraypaper[i].addEventListener('click', () => {
    hide(game);
    show(play)
    const random_value = random();
    console.log(random_value);
    if(random_value == 1){
      insert_user_win.innerHTML = `<div class="user-img-paper">
      <img src="./images/paper.png" alt="stone-circle">
    </div>`
    pc_img.innerHTML = `<div class="pc-img-stone">
    <img src="./images/stone.png" alt="scissor-circle" class="pc-img-icon">
  </div>`

  your = your + 1;
  update_score();

      show(user_win); // user-paper, comp-stone
      console.log("user_win");

      play_again_user.addEventListener('click', replay);
    }
    else if(random_value == 2){
      change.innerHTML = `<div class="user-image-paper">
      <img src="./images/paper.png" alt="stone" class="user-image-icon">
    </div> `
    insert_computer_win.innerHTML = `<div class="pc-image-scissor">
    <img src="./images/scissor.png" alt="scissor" class="pc-image-icon">
  </div>`

  comp = comp + 1;
  update_score();
  
      show(computer_win); // user-paper, comp-scissor
      console.log("computer - win");

      play_again_computer.addEventListener('click', replay);
    }
    else{
      tie_user_image.innerHTML = `<div class="tie-user-img-paper">
      <img src="./images/paper.png" alt="stone-circle" class="tie-image-icon">
    </div>`
    tie_pc_image.innerHTML = `<div class="tie-pc-img-paper">
    <img src="./images/paper.png" alt="scissor-circle" class="tie-pc-image-icon">
  </div>`
      show(tie); // user-paper, comp-paper
      console.log("tie");

      play_again_tie.addEventListener('click', replay);
    }

  });
}


game_rule_btn.addEventListener('click', () => {
  toggleVisibility_show(game_rule_guidelines);
});
game_cross_button.addEventListener('click', () => {
  toggleVisibility_hide(game_rule_guidelines);
  console.log("kl");
});

computer_rule_btn.addEventListener('click', () => {
  toggleVisibility_show(computer_rule_guidelines);
});

computer_cross_button.addEventListener('click', () => {
  toggleVisibility_hide(computer_rule_guidelines);
  console.log("kl");
});

user_rule_btn.addEventListener('click', () => {
  toggleVisibility_show(user_rule_guidelines);
});

user_cross_button.addEventListener('click', () => {
  toggleVisibility_hide(user_rule_guidelines);
  // console.log("kl");
});

tie_rule_btn.addEventListener('click', () => {
  toggleVisibility_show(tie_rule_guidelines);
});

tie_cross_button.addEventListener('click', () => {
  toggleVisibility_hide(tie_rule_guidelines);
  // console.log("kl");
});




