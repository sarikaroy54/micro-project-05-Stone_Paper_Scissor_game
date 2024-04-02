const user_nextpage_rule_btn = document.querySelector('.user-nextpage-rule-btn');
const user_nextpage_rule_guidelines = document.querySelector('.user-nextpage-rule-guidelines');
const user_nextpage_cross_button = document.querySelector('.user-nextpage-cross-button');

function toggleVisibility_show(element) {
  element.style.opacity = 1;
}

function toggleVisibility_hide(element) {
  element.style.opacity = 0;
}


user_nextpage_rule_btn.addEventListener('click', () => {
  toggleVisibility_show(user_nextpage_rule_guidelines);
});
user_nextpage_cross_button.addEventListener('click', () => {
  toggleVisibility_hide(user_nextpage_rule_guidelines);
  console.log("kl");
});