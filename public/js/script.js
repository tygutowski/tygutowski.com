// Constants
const tabs = ['april fools gamejam', 'noita mod', 'graphics library', 'garbage collector', 'home'];
const BUFFER_SIZE = 20;

// DOM elements
const tabsContainer = document.querySelector('.tabs');
const displayCanvas = document.querySelector('.display-canvas');
const listOfTabs = document.querySelectorAll('.tabs');

let isAnimating = false;

// Tab Contents Dictionary
const tabContents = {
    'home': {
        type: 'home',
        github: 'https://github.com/tygutowski/tygutowski.com',
        scrollable: 'true',
        content: `
        <div class="home">
          <div class="inline">
            <span class="name">ty gutowski</span>
            <span class="title">,</span><br>
          </div>
          <span class="title">a software engineer</span><br>
          <span class="title">with a passion</span><br>
          <div class="inline">
            <span class="title">for&nbsp;</span>
            <span class="highlight">embedded systems</span>
            <span class="title">.</span><br>
          </div>
        </div>
        <div class="inline-link">
            <a href="https://github.com/tygutowski/tygutowski.com", target="_blank, class="github">
              <span class="github">click here to visit this project on github</span>
            </a>
        </div>
        `
    },
    'garbage collector': {
        type: 'project',
        github: 'https://github.com/tygutowski/compiler',
        scrollable: 'false',
        content: `
        <div class="video-description-container">
            <span class="video-description">My&nbsp;</span>
            <span class="video-highlight">senior design project</span>
            <span class="video-description">. I am researching the intricacies of&nbsp;</span><span class="video-highlight">garbage collectors</span><span class="video-description">, then writing my own. I will be implementing it into</span>
            <span class="video-description">my partner, Trevor Schiff's compiler, which he wrote for a class.</span>
        </div>
        <div class="inline-link">
            <a href="https://github.com/tygutowski/compiler", target="_blank, class="github", >
                <span class="github">click here to visit this project on github</span>
            </a>
        </div>
        `
    },
    'graphics library': {
        type: 'project',
        github: 'https://github.com/tygutowski/graphics',
        scrollable: 'true',
        content: `
        <div class="video-container">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Sljvkb9wdyM" title="graphics library" frameborder="0" allowfullscreen></iframe><br>
        </div>
        <div class="video-description-container">
          <span class="video-description">a custom graphics library made in python3 using vedo. the library performs all basic linear transformations, including </span>
          <span class="video-highlight">transforming</span><span class="video-description">, </span>
          <span class="video-highlight">rotating</span>
          <span class="video-description"> and </span>
          <span class="video-highlight">scaling</span><span class="video-description">. it also includes </span>
          <span class="video-highlight">forward and inverse kinematics</span><span class="video-description">, which use the </span>
          <span class="video-highlight">gradient descent algorithm</span>
          <span class="video-description"> to find the line of best fit. there is a rudimentary </span>
          <span class="video-highlight">raytracer</span><span class="video-description">, but it only renders a single image, and does not support animations.</span>
        </div>
        <div class="inline-link">
            <a href="https://github.com/tygutowski/graphics", target="_blank, class="github">
                <span class="github">click here to visit this project on github</span>
            </a>
        </div>
        `
        },
    'noita mod': {
        type: 'project',
        github: 'https://github.com/tygutowski/inedible-holy-mountain',
        scrollable: 'true',
        content: `
        <div class="image-container">
            <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2972891892" target="_blank">
                <img src="/imgs/noita-thumbnail.jpg" alt="Steam Community Content" style="border-radius: 5px; width:100%; height:auto; margins=20px;"/>
            </a>
        </div>
        <div class="video-description-container">
            <span class="video-description">a quality of life</span>
            <span class="video-highlight">mod </span>
            <span class="video-description">for the game noita. this mod prevents specific types of enemies from destroying specific types of terrain. </span>
            <span class="video-description">this mod is fairly simple, but its meant to be.</span>
        </div>
        <div class="review-container">
            <div class="review">
                <div class="profile">
                    <a href="https://steamcommunity.com/id/BalBalBoi" target="_blank" alt="Profile Picture" class="profile-pic">
                        <img src="imgs/noita-review-littleevo.jpg" alt="Profile Picture" class="profile-pic">
                    </a>
                    <h3>
                        LittleEvo
                    </h3>
                </div>
                <p>"thank you so much! ive always loved the worm eating mechanic but not so much their tendency to piss off the gods."</p>
            </div>
            <div class="review">
                <div class="profile">
                    <a href="https://steamcommunity.com/profiles/76561197974582373" target="_blank" alt="Profile Picture" class="profile-pic">
                        <img src="imgs/noita-review-anarcher.jpg" alt="Profile Picture" class="profile-pic">
                    </a>
                    <h3>
                        anarcher
                    </h3>
                </div>
                <p>"👍"</p>
            </div>
        </div>
        <div class="inline-link">
            <a href="https://github.com/tygutowski/inedible-holy-mountain", target="_blank, class="github">
                <span class="github">click here to visit this project on github</span>
            </a>
        </div>
        `
    },
    'april fools gamejam': {
        type: 'project',
        github: 'https://github.com/tygutowski/april-fools-gamejam',
        scrollable: 'false',
        content: `
        <div class="embed-container">
        <iframe frameborder="0" src="https://itch.io/embed/1996720?border_width=0&amp;bg_color=626880&amp;fg_color=A5ADCB&amp;link_color=EED49F&amp;border_color=626880" width="550" height="165"><a href="https://tygutowski.itch.io/touch-of-gold">Touch of Gold by tygutowski</a></iframe>
        </div>
        <div class="video-description-container">
          <span class="video-description">a short </span>
          <span class="video-highlight">puzzle game</span>
          <span class="video-description"> where the user plays as king midas. touching
          <span class="video-description"> objects will turn them into gold, which conducts electricity. </span>
          <span class="video-description">this game was </span>
          <span class="video-highlight">made entirely in 48 hours</span><span class="video-description"> for the april fools gamejam.</span>
        </div>
        <div class="video-description-container">
            <span class="video-description">this game won </span><span class="video-highlight">first place in game design</span><span class="video-description">.</span>
        </div>
        <div class="review-container">
            <div class="review">
                <div class="profile">
                    <a href="https://itch.io/profile/studio-drill" target="_blank" alt="Profile Picture" class="profile-pic">
                        <img src="imgs/april-fools-gamejam-review-drill.png" alt="Profile Picture" class="profile-pic">
                    </a>
                    <h3>
                        drill
                    </h3>
                </div>
                <p>"What a fantastic idea! It's intuitive and enjoyable. I can imagine it being developed into a bigger game that I would be thrilled to play. The art and sound design are top-notch, and the game design is excellent. Great job."</p>
            </div>
            <div class="review">
                <div class="profile">
                    <a href="https://itch.io/profile/michael-levin" target="_blank" alt="Profile Picture" class="profile-pic">
                        <img src="imgs/april-fools-gamejam-review-michael-levin.png" alt="Profile Picture" class="profile-pic">
                    </a>
                    <h3>
                        Michael Levin (Diamond Card)
                    </h3>
                </div>
                <p>"Very cool game! the gameplay is fun, and the art is absolutely amazing making gold sprites in pixel art is very hard and youve killed it! (in a good way lol)"</p>
            </div>
            <div class="review">
                <div class="profile">
                    <a href="https://itch.io/profile/honigbeegames" target="_blank" alt="Profile Picture" class="profile-pic">
                        <img src="imgs/april-fools-gamejam-review-honigbeegames.png" alt="Profile Picture" class="profile-pic">
                    </a>
                    <h3>
                        HonigBeeGames
                    </h3>
                </div>
                <p>"Loving this so far! Great art and puzzle mechanics!"</p>
            </div>
            <div class="review">
            <div class="profile">
                <a href="https://itch.io/profile/anleglift" target="_blank" alt="Profile Picture" class="profile-pic">
                    <img src="imgs/april-fools-gamejam-review-anleglift.png" alt="Profile Picture" class="profile-pic">
                </a>
                <h3>
                    Anleglift
                </h3>
            </div>
            <p>"Great game, the music and the art was done perfectly and the gameplay was very smooth and fun great job!!!"</p>
            </div>
            <div class="review">
            <div class="profile">
                <a href="https://itch.io/profile/kyjor" target="_blank" alt="Profile Picture" class="profile-pic">
                    <img src="imgs/april-fools-gamejam-review-kyjor.png" alt="Profile Picture" class="profile-pic">
                </a>
                <h3>
                    Kyjor
                </h3>
            </div>
            <p>"Wow. Really great game with some promising concepts!"</p>
            </div>
            <div class="review">
                <div class="profile">
                    <a href="https://itch.io/profile/birkheadc" target="_blank" alt="Profile Picture" class="profile-pic">
                        <img src="imgs/april-fools-gamejam-review-birkheadc.png" alt="Profile Picture" class="profile-pic">
                    </a>
                    <h3>
                        birkheadc
                    </h3>
                </div>
                <p>"That was really fun. The last puzzle was pretty hard."</p>
            </div>
            <div class="review">
            <div class="profile">
                <a href="https://itch.io/profile/mr-ranger" target="_blank" alt="Profile Picture" class="profile-pic">
                    <img src="imgs/april-fools-gamejam-review-mr-ranger.png" alt="Profile Picture" class="profile-pic">
                </a>
                <h3>
                    mr_ranger
                </h3>
            </div>
            <p>"great game"</p>
        </div>
        </div>
        <div class="inline-link">
            <a href="https://github.com/tygutowski/april-fools-gamejam", target="_blank, class="github">
                <span class="github">click here to visit this project on github</span>
            </a>
        </div>
        `
    }
};

// Initialize
init();

// Event Listeners
tabsContainer.addEventListener('scroll', adjustInfiniteScroll);

// Function Definitions

/**
 * Initializes the application
 */
function init() {
    populateTabs();
    adjustInfiniteScroll();
    handleTabClick("home");
}


/**
 * Populates the tab container with tab elements
 */
function populateTabs() {
    for (const tab of tabs) {
        const tabElement = createTabElement(tab);
        tabsContainer.appendChild(tabElement);
    }
    // Append and prepend BUFFER_SIZE * tabs.length tabs to simulate infinite scroll
    for (let i = 0; i < BUFFER_SIZE; i++) {
        tabs.forEach(tab => {
            const tabElement = createTabElement(tab);
            tabsContainer.appendChild(tabElement.cloneNode(true)); // append
            tabsContainer.prepend(tabElement); // prepend
        });
    }
}

/**
 * Creates a tab element
 */
function createTabElement(tabName) {
    const tabElement = document.createElement('div');
    tabElement.classList.add('tab');
    tabElement.innerText = tabName;
    tabElement.addEventListener('click', () => handleTabClick(tabElement.innerText));
    return tabElement;
}

/**
 * Handles a tab click event
 */
function handleTabClick(tabName) {
    const tabData = tabContents[tabName] || tabContents["home"];
    displayCanvas.classList.remove('content-left-aligned', 'content-centered', /* any other classes you might have */);
    displayCanvas.innerHTML = renderText(tabData.content);

    switch(tabData.scrollable) {
        case 'false':
            displayCanvas.style.overflowY = 'auto';
            displayCanvas.style.scrollbarWidth = 'auto'; 
            break;
        case 'true':
            displayCanvas.style.overflowY = 'auto';
            displayCanvas.style.scrollbarWidth = 'auto'; 
            break;
        default:
            displayCanvas.style.overflowY = 'auto';
            displayCanvas.style.scrollbarWidth = 'auto'; 
            break;
    }

    /*switch (tabData.type) {
        case 'home':
            displayCanvas.classList.add('content-centered');
            break;
        case 'project':
            displayCanvas.classList.add('content-centered');
            break;
        case 'widget':
            displayCanvas.classList.add('content-centered');
            break;
            
        default:
            displayCanvas.innerHTML = `Content for ${tabName} is not defined.`;
            break;
    }*/
    scrollToSelectedTab(tabName);
    selectTab(tabName);
}

/**
 * Adjusts infinite scroll for the tabs
 */
function adjustInfiniteScroll() {
    const tabHeight = tabsContainer.firstChild.offsetHeight;

    if (tabsContainer.scrollTop < BUFFER_SIZE * tabHeight) {
        tabsContainer.scrollTop += tabs.length * tabHeight;
    } else if (tabsContainer.scrollTop > (BUFFER_SIZE + tabs.length) * tabHeight) {
        tabsContainer.scrollTop -= tabs.length * tabHeight;
    }
}

/**
 * Renders text content
 */
function renderText(content) {
    return content;
}

/**
 * Renders video content
 */
function renderVideo(content, videoUrl) {
    return `
        ${content}
        <iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
    `;
}

/**
 * Highlights the selected tab
 */
function selectTab(tabName) {
    const allTabs = document.querySelectorAll('.tab');
    let selectedTab = null;
    allTabs.forEach(tab => {
        if(tab.innerText === tabName) {
            tab.classList.add('selected');
            selectedTab = tab;
        } else {
            tab.classList.remove('selected');
        }
    });
    displayCanvas.scrollTop = 0;
}

/**
 * Gets the closest tab in the viewport
 */
function getClosestTabInViewport(tabName) {
    const allTabs = document.querySelectorAll('.tab');
    let closestTab;
    let minDistance = Infinity;

    allTabs.forEach(tab => {
        if (tab.innerText === tabName) {
            const rect = tab.getBoundingClientRect();
            const distance = Math.abs(window.innerHeight / 2 - rect.top);
            if (distance < minDistance) {
                minDistance = distance;
                closestTab = tab;
            }
        }
    });

    return closestTab;
}

/**
 * Scrolls to the selected tab smoothly
 */
function scrollToSelectedTab(tabName) {
    const selectedTab = getClosestTabInViewport(tabName);
    
    if (!selectedTab) return;
    
    const targetPosition = computeTargetScrollPosition(selectedTab);
    smoothScrollTo(tabsContainer, targetPosition, 500);
}

/**
 * Computes target scroll position for given tab
 */
function computeTargetScrollPosition(tab) {
    const tabsContainerRect = tabsContainer.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    const targetPosition = tabsContainer.scrollTop 
        + (tabRect.top - tabsContainerRect.top) 
        - (tabsContainer.clientHeight / 2) 
        + (tabRect.height / 2)
        + (tabRect.height * (tab.childElementCount - 1)
        + 100);

    return targetPosition;
}

/**
 * Smooth scrolling to the specified target
 */
function smoothScrollTo(element, target, duration) {
    const start = element.scrollTop;
    const change = target - start;
    let startTime = null;

    isAnimating = true;

    function animateScroll(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        element.scrollTop = start + change * easeInOutQuad(progress);

        if (progress < 1) {
            window.requestAnimationFrame(animateScroll);
        } else {
            isAnimating = false;
            adjustInfiniteScroll();
        }
    }

    window.requestAnimationFrame(animateScroll);
}

/**
 * Easing function for smooth scrolling
 */
function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}