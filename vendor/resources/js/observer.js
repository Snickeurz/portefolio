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
            console.log(entry);
            switch (entry.target.id)
            {
                case "soundcloudplayer1":
                    entry.target.style.animation = 'animXRightToLeft 2s forwards ease-in';
                    break;
                case "soundcloudplayer2":
                case "contactBox2":
                    entry.target.style.animation = 'bounceInUp 2.5s forwards ease-in';
                    break;
                case "soundcloudplayer3":
                case "contactBox1":
                case "text-site-tarik":
                case "screenshot-site-tarik":
                    entry.target.style.animation = 'bounceInLeft 2.5s forwards';
                    break;
                case "soundcloudplayer4":
                case "contactBox3":
                case "image-tarik":
                    entry.target.style.animation = 'bounceInRight 2.5s forwards ';
                    break;
                case "content-soundcloud-right":
                    entry.target.style.animation = 'animXLeftToRight 2s forwards ease-in-out';
                    break;
                case "profileCard":
                case "footer":
                    entry.target.style.animation = 'fadeInUp 2s forwards';
                    break;
                case "services":
                    entry.target.style.animation = 'zoomInRight 2s forwards';
                    break;
                case "showMusicContentTitle":
                    entry.target.style.animation = 'pulse 2s forwards';
                    break;
                case "showPresentationContentTitle":
                case "showWebContentTitle":
                case "showContactContentTitle":
                    entry.target.style.animation = 'swing 2s forwards';
                    break;
                default:
                    break;
            }
        }
        else
        {
            // reset animation
            // entry.target.style.animation = 'none';
        }

    });
}