const customeNameInput = document.querySelector('#customname');
const generateRandomStory = document.querySelector('.randomize');
const storyParagraph = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

const insertX = ['Willy the Goblin\n', 'Big Daddy', 'Father Christmas']
const insertY = ['the soup kitchen\n', 'Disneyland\n', 'the White House']
const insertZ = ['spontaneously combusted\n', 'melted into a puddle on the sidewalk\n', 'turned into a slug and crawled away']

generateRandomStory.addEventListener('click', result);

function result(){
    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);  
    
    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);

    if(customeNameInput!==''){
        const name = customeNameInput.value;
        newStory = newStory.replaceAll('Bob', name);
    }

    if(document.getElementById('uk').checked){
        const weight = '${(Math.round(300/14)} stone';
        const temp = '${Math.round((94-32)*5/9)} centigrade';
        newStory = newStory.replace('300 pounds', weight);
        newStory = newStory.replace('94 fahrenheit', temp);
    }

    storyParagraph.textContent = newStory;
    storyParagraph.style.visibility ='visible';




}