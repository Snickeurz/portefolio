// A $( document ).ready() block.
// $( document ).ready(function() {
//     wow = new WOW(
//         {
//             animateClass: 'animated',
//             offset:       100,
//             callback:     function(box) {
//                 console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
//             }
//         }
//     );
// });

// array of elements to animate
var boxElement;

// Add event
window.addEventListener("load", function(event)
{
    // Feed array
    boxElement = document.querySelectorAll(".anim");

    createObserver();
}, false);

// Create observer
function createObserver()
{
    var observer;

    // iterate trought elements's array
    for (let i = 0; i < boxElement.length; i++)
    {
        // for each boxElements handleIntersect
        observer = new IntersectionObserver(handleIntersect);
        observer.observe(boxElement[i]);
    }
}

function handleIntersect(entries)
{
    entries.forEach(function(entry)
    {
        // if intersecting
        if(entry.isIntersecting)
        {
            console.log("entry target id : " + entry.target.id);
            switch (entry.target.id)
            {
                case "soundcloudplayer1":
                    entry.target.style.animation = 'animXRightToLeft 2.5s forwards ease-in';
                    break;
                case "content-soundcloud-right":
                    entry.target.style.animation = 'animXLeftToRight 2.5s forwards ease-in-out';
                    break;
                case "profileCard":
                    entry.target.style.animation = 'fadeInUp 2.5s forwards';
                    break;
                case "services":
                    entry.target.style.animation = 'zoomInRight 2.5s forwards';
                    break;
                case "showMusicContentTitle":
                    entry.target.style.animation = 'pulse 2.5s forwards';
                    break;
                default:
                    break;
            }
        }
        else
        {
            // reset animation
            entry.target.style.animation = 'none';
        }

    });
}