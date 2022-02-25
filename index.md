---
layout: home
permalink: /
permalink_name: /home
title: "[jormungandr1105@website ~]$ "
---
```c++
#include <mountain_dew>
#include <project>


bool sprint_to_the_store(mountain_dew &pack);
project pick_new_project();
void write_code(project Project, mountain_dew &pack);


int main() {
  bool keep_surviving = true;
  mountain_dew* pack = new mountain_dew();
  project Project;
  // THE WHILE LOOPS OF LIFE
  while (keep_surviving) {
    while(pack.get_num_cans() > 0) {
      // Spend the day working on a new project
      Project = pick_new_project();
      write_code(Project, pack);
    }
    // Dash out for some more caffeine
    keep_surviving = sprint_to_the_store(pack);
  }
  // It was nice while it lasted
  return 0;
}

bool sprint_to_the_store(mountain_dew &pack) {
  if (able_to_buy_soda) {
    pack.add_cans(12);
  }
  return able_to_buy_soda;
}

project pick_new_project() {
  // Get distracted by some vague topic
  // I don't understand,
  // then strive to understand it
  return random_idea;
}

void write_code(project Project, mountain_dew &pack) {
  // Pretend to know what I'm doing and fail a lot
  pack.drink_cans(3);
  Project.mash_keys_asynchronously();
  Project.fail_upwards();
}
```
