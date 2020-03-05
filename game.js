const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame()
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'Welcome to Dragons treasure quest! press start to play',
        options: [
            {
                text: 'Start',
                nextText: 2
      }
    ]
  },
    {
        id: 2,
        text: 'You enter Elf kingdom after years of being away and notice that the streets are extremely barren and empty; you notice a guard and head in his direction',
        options: [
            {
                text: 'Speak to guard.',
                nextText: 3
      }
    ]
  },
    {
        id: 3,
        text: 'The guard looks at you with excitement and says “Finally you have returned!!!! please follow me you need to speak to the King".',
        options: [
            {
                text: 'Follow the guard.',
                nextText: 4
      }
    ]
  },
    {
        id: 4,
        text: 'You follow the guard up ten flights of stairs to a large dining hall which leads to a large throne where the king is currently sitting on. The king states: "You have returned at a time when the kingdom is in great peril as we need to eliminate the threat of Ancalagon the black dragon, will you help us in our hour of need?”.',
        options: [
            {
                text: 'Accept the kings offer',
                nextText: 7
      },
            {
                text: 'Reject the kings offer',

                nextText: 6
      }
    ]
  },
    {
        id: 6,
        text: 'The King is be furious with your decision and orders  his guards to arrest you and throw you in jail where you will rot forever meaning the Adventure is over.',
        options: [
            {
                text: 'Restart',
                nextText: -1
      }
    ]
  },
    {
        id: 7,
        text: 'The king begins to explain that they cannot afford to have more frequent attacks during the spring and summer months so Ancalagon the dragon must be slayed once and for all.',
        options: [
            {
                text: 'Continue',
                nextText: 8
      }
    ]


  },
    {
        id: 8,
        text: 'After hearing this story, you ask kindly if you can have a night sleep before heading out on this dangerous quest; the king agrees and gives you the finest room in the castle other than his own. You retire to your room when you hear a knock on the door; the guard from earlier has come to your room to ask if you would like to join him at the local tavern for a few beverages.',
        options: [
            {
                text: 'Accept the invitation',
                nextText: 10
      },
            {
                text: 'Decline the invitation',
                nextText: 9
        }
    ]
    }, 
    {
        id: 10,
        text: 'you go to the tavern with your old friend the guard but as one drink leads to another this lasts until 5 in the morning; you leave the tavern in a sorry state and see a bright light from the forest just outside the castle walls, your curiosity gets the better of you here and you follow this bright light deep into the woods, at this point you think you should turn back but it’s too late you have fallen into a trap set by a gang of orcs, the adventure is now over but you make a fantastic meal for the orcs. ',
        options: [
            {
                text: 'Restart',
                nextText: -1
        
     
      }
    ]
  },
    {
        id: 9,
        text: 'You are now well rested for the mornings journey through the great plains of middle earth to dragon mountain. As you make your way to the great hall before you set out on your quest you are stopped by the king’s advisor; he looks at you and states “Great sir, the journey ahead is a long one, we can offer you the privilege of a noble stead to accompany you on your quest, would this be of interest to you?”. ',
        options: [
            {
                text: 'Leave on horse',
                nextText: 11
      },
            {
                text: 'Leave on foot',
                nextText: 12
      }
    ]
  },
    {
        id: 12,
        text: 'You reject the offer and say "ill make the journey on foot” you set out on the quest but after 48 hours of travel you become unimaginably famished and when you come face to face with Ancalagon the black dragon you are too weak to carry out battle thus being easy prey; you are shallowed whole by the dragon whom wakes up in a fit of anger, the adventure is now over and the Elf Kingdom is attacked immediately meaning there are no survivors and the Elf Kingdom perishes ',
        options: [
            {
                text: 'Restart',
                nextText: -1
      }
    ]
        },
    {
        id: 11,
        text: ' You accept the noble stead now you travel to dragon mountain with no difficulties what so ever and arrive at the foot of the mountain within 24 hours of setting off on the adventure. You leave your noble stead at the side of the mountain and retrieve your trusted sword from your satchel; you walk to the peak of the mountain and there you see Ancalagon the black dragon asleep on a pile of gold and treasure. You are aware that too much gazing at dragon’s treasure can turn a man insane; with this in mind you have two options take a left turn to through a rocky path to arrive behind the dragon or take a right turn through a sludge ridden path to also arrive behind the dragon. ',
        options: [
            {
                text: 'Take a left through the rocky path',
                nextText: 13
      },
            {
                text: 'Take a right through the sludge ridden path',
                nextText: 14
      }
  ]
  },

    {
        id: 14,
        text: 'You decide to take the sludge ridden path hopeful of arriving behind the dragon to deliver a devastating blow; after a few moments on this path you accidently slip in the mud falling a great distance and landing in the dragon’s treasure. You gaze longingly into the treasure as it seems to grip you further at this point there’s no going back it has completely taken hold of you; in a way it seems to have possessed your mind, body and soul. For a moment a slight distraction takes you away from the gaze of the dragon’s treasure; you notice red lights which appear from nowhere. The dragon’s eyes glow red as the noise of the rustling treasure has awaken him from his deep slumber. Ancalagon the black dragon rises on his back two legs staring down upon you; the dragon’s mouth opens and the deep red of fire begins to emerge but it slowly stops, the dragon begins to speak:” They have sent you to slay me haven’t they? The Elf King”. you are still gripped in insanity and state “Yes they sent me to dispose of you but the treasure has changed everything” The dragon now realises that he has trapped a new victim in his treasure spell. The dragon replies: “join me in destroying the Elf Kingdom and this treasure can be yours”. You agree as you have been completely consumed by the greed that a simple gaze of dragon’s treasure can cause. The user now on the back of the dragon invades the Elf Kingdom destroying everything in their path; you will now lead your life as a villain who has been completely consumed by greed and betrayed everything you once knew: the adventure is over. ',
        options: [
            {
                text: 'Play again',
                nextText: -1
      }
    ]

  },
    {
        id: 13,
        text: 'You arrive behind the dragon with ease fully unscathed avoiding the glare of the dragon’s treasure; you jump on the dragon’s back who wakes with a fright, you plunge your trusted sword into the skull of the dragon whom struggles for a few moments before falling to its death. You retrieve your sword from the dragon’s skull, wipe the sword down and return to your noble stead. You return to the Elf Kingdom a hero as you have saved the Kingdom from an almost certain extinction; there is a massive parade in your honour and you are knighted for your services to the Elf Kingdom. You are now a hero in the eyes of everyone in the Elf Kingdom. Well done the adventure is now over.',
        options: [
            {
                text: 'Congratulations. Play Again.',
                nextText: -1
      }
    ]
        
  }
]

startGame()
