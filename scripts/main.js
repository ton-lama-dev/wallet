let activityExpanded = false;

document.getElementById('activity__top__button').addEventListener('click', function() {
    if (!activityExpanded) {
        expandActivity();
        blurMain();
    } else {
        revealMain();
        shrinkActivity();
    }
    
    activityExpanded = !activityExpanded;
})


function expandActivity() {
    let $activity = document.getElementById('activity');
    $activity.classList.add('expand_activity');
    $activity.classList.remove('shrink_activity');
    turnHistoryButton();
}

function shrinkActivity() {
    let $activity = document.getElementById('activity');
    $activity.classList.add('shrink_activity');
    $activity.classList.remove('expand_activity');
    turnHistoryButton();
}


function blurMain() {
    let $main = document.getElementById('main');
    $main.classList.add('blur_main');
    $main.classList.remove('reveal_main');
    $main.addEventListener('click', function() {
        revealMain();
        shrinkActivity();
        activityExpanded = false;
    }, {once: true});
}

function revealMain() {
    let $main = document.getElementById('main');
    $main.classList.add('reveal_main');
    $main.classList.remove('blur_main');
}


isTurned = false
function turnHistoryButton() {
    let $historyButton = document.getElementById('activity-button');
    
    if (!isTurned) {
        $historyButton.classList.add('turn-down');
        $historyButton.classList.remove('turn-up');
    } else {
        $historyButton.classList.add('turn-up');
        $historyButton.classList.remove('turn-down');
    }

    isTurned = !isTurned;
}