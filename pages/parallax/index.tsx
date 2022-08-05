import React from "react";
import Image from "next/image";


const Parallax = () => {
  return (
    <div className="w-full h-[100vh] overflow-y-auto overflow-x-hidden wrapper">
      <div className="background w-[100vw] h-[100vh] relative">
        <img
          src="https://joaojhgs.github.io/css-animations/images/background.jpg"
          className="backgroundImg image"
        />
        <img
          src="https://joaojhgs.github.io/css-animations/images/foreground.png"
          className="foregroundImg image"
        />
      </div>
      <div className="w-full h-[100vh] bg-white text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at orci dapibus, eleifend diam vel, condimentum risus. Sed hendrerit iaculis tincidunt. Nam leo arcu, semper sit amet neque nec, sollicitudin porttitor nunc. Aliquam nibh nunc, fringilla ut sem ac, feugiat facilisis augue. Nulla fermentum lectus velit, id fermentum lacus tristique ut. Nullam ornare varius tortor sit amet aliquet. Vestibulum in velit consectetur, elementum neque quis, hendrerit enim. Etiam eu erat elit.

Sed mollis diam sed bibendum auctor. Nullam quis faucibus sapien. Vivamus pulvinar ex mollis interdum iaculis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas pellentesque, libero non sagittis consequat, lectus erat mattis metus, tincidunt finibus lectus sem ac sapien. Nam ut nibh ornare, mollis mauris fringilla, rhoncus massa. Vestibulum porta ipsum eu nunc congue, ut eleifend risus tempor. Phasellus pulvinar aliquet erat at suscipit.

Nullam facilisis ut purus non ornare. Nullam neque purus, vehicula a ullamcorper et, condimentum ac nunc. Duis vel faucibus eros. Cras interdum ut ante a maximus. Aenean ornare sit amet lacus eu scelerisque. Integer at nisl quis metus interdum maximus. Phasellus sagittis rhoncus turpis, et tempus orci venenatis nec. Integer vel ligula dui. Quisque in eros rutrum, facilisis purus a, sodales dui. Nulla in mauris sem. Donec dictum enim tincidunt libero egestas suscipit. Duis mattis, purus vel tincidunt egestas, velit neque fringilla arcu, ac molestie diam diam a sapien.

In non cursus risus. Nam in viverra nisi. Nullam a velit nec lorem imperdiet congue nec quis est. Nunc interdum, arcu et rhoncus porta, dui velit porta metus, et ullamcorper ex erat et erat. Vivamus ullamcorper, elit at vehicula porta, eros diam volutpat nulla, id mattis metus tellus convallis metus. Nulla mattis rhoncus luctus. Mauris non metus purus. Praesent luctus metus sed magna imperdiet euismod. Nulla leo ligula, luctus vel diam id, efficitur vestibulum nulla. Vestibulum varius non orci non dapibus. Nulla ultrices mollis metus, eu rutrum quam volutpat finibus. Aliquam dolor ipsum, dictum nec nunc sit amet, accumsan cursus purus. Suspendisse potenti.

Vivamus eget dui dui. Praesent non posuere purus. Aliquam erat volutpat. Donec ut nisl at tellus tincidunt laoreet. Donec laoreet, arcu eget feugiat gravida, enim nulla euismod eros, in ultrices justo erat vel elit. Sed pellentesque, sapien vitae laoreet ultrices, augue leo maximus turpis, ut posuere purus dui at libero. Nulla nec finibus ipsum. Vivamus quis dictum nulla. Nunc turpis sem, accumsan eu tellus sit amet, gravida commodo leo. Pellentesque sit amet finibus ante. Donec ac ipsum non erat aliquet tincidunt. Mauris aliquam nulla quis urna vehicula, non sodales nibh suscipit. Cras convallis posuere ex, id maximus ipsum gravida in. Pellentesque lacinia posuere tellus, sed luctus ex. Cras vel erat ullamcorper, mollis nisl vel, mattis est.</div>
    </div>
  );
};

export default Parallax;
