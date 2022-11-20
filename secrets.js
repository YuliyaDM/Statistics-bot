const { swears } = require('./swears');

const OURCHATLINK = 'https://t.me/+6RWoidohAtMzNjMy';
const BADWORDSDICTIONARY = swears.join('|');
const BADWORDS = new RegExp(BADWORDSDICTIONARY, 'gmi');
const OURCHATID = -1001866210959;
const TIMEFORWAITING = 500;
const ABOUTCOMMANDS = {
  list: [
    { command: '/start', description: 'start bot' },
    { command: '/help', description: 'help command' },
    { command: '/about', description: 'about team' },
    { command: '/activeusers', description: 'sharing active users' },
    { command: '/unactiveusers', description: 'sharing unactive users' },
    { command: '/allusers', description: 'sharing all statistics' },
    { command: '/lazymode_v1', description: 'turning on lazy mode v1' },
    { command: '/settings', description: "open bot's settings" },
  ],
  string: `/help - list of commands.
/about - about this bot.
/start - start this bot.
/allusers - getting all users.
/unactiveusers - getting unactive users.
/activeusers - getting active users.
/team - getting team members.
/hi - getting greetings of bot.`,
  userscommands: {
    '/activeusers': 1,
    '/unactiveusers': -1,
    '/allusers': 0,
  },
};

const COMMANDS = {
  about: {
    greetings: '_*Hi, This bot is created by Miksam, Vadim, Lera and Lijua*_',
    invitation: `*You can [go](${OURCHATLINK}) to our chat, and improve this bot*`,
  },
  start:
    'Hello, my friend! This bot can help you with analysing of messages and getting statistics.',
  lazymode_v1:
    'You tried the new unofficial command! Okay, so now you can choose the command.',
  hi: {
    greetings: 'Hi!',
    picture: 'wallpaperaccess.com/full/1122438.jpg',
  },
};
const REPLYMARKUP = {
  keyboard: [
    [{ text: '/start' }, { text: '/about' }, { text: '/help' }],
    [
      { text: '/unactiveusers' },
      { text: '/activeusers' },
      { text: '/allusers' },
      { text: '/hi' },
    ],
    [{ text: 'remove keyboard' }],
  ],
  resize_keyboard: true,
};

const CALLBACKQUERY = {
  reply_markup: {
    inline_keyboard: [
      [{ text: '/start' }, { text: '/about' }, { text: '/help' }],
      [
        { text: '/unactiveusers' },
        { text: '/activeusers' },
        { text: '/allusers' },
        { text: '/hi' },
      ],
      [{ text: 'settings' }],
    ],
    resize_keyboard: true,
  },
};

const SETTINGS = {
  reply_markup: {
    inline_keyboard: [
      [
        { text: 'remove inline keyboard', action: 'remove inline keyboard' },
        { text: 'add inline keyboard', action: 'add inline keyboard' },
      ],
      [{ text: 'remove settings', action: 'remove settings' }],
      [{ text: 'back to list of commands', action: 'back' }],
    ],
    resize_keyboard: true,
  },
};

const CREATORSIMAGES = {
  creator1: {
    photoLink:
      'https://raw.githubusercontent.com/jaluio-rabbit/creators-images/main/Bogdan2_image.jpg',
    name: 'Bogdan',
    caption:
      '<strong>Github</strong> is - <a href="https://github.com/BOGDAN-GRISHIN/">Here</a>',
    siteLink: 'https://github.com/BOGDAN-GRISHIN',
  },
  creator2: {
    photoLink:
      'https://raw.githubusercontent.com/jaluio-rabbit/creators-images/main/Lera_image.jpg',
    name: 'Lera',
    caption:
      '<strong>Github</strong> is - <a href="https://github.com/Valerchixx/">Here</a>',
    siteLink: 'https://github.com/Valerchixx',
  },
  creator3: {
    photoLink:
      'https://raw.githubusercontent.com/jaluio-rabbit/creators-images/main/Vadim_image.jpg',
    name: 'Vadim',
    caption:
      '<strong>Github</strong> is - <a href="https://github.com/vavadikb/">Here</a>',
    siteLink: 'https://github.com/vavadikb',
  },
  creator4: {
    photoLink:
      'https://raw.githubusercontent.com/jaluio-rabbit/creators-images/main/Maksim_image.jpg',
    name: 'Maksim',
    caption:
      '<strong>Github</strong> is - <a href="https://github.com/Miksam13/">Here</a>',
    siteLink: 'https://github.com/Miksam13',
  },
  creator5: {
    photoLink:
      'https://raw.githubusercontent.com/jaluio-rabbit/creators-images/main/Lijua_image.jpg',
    name: 'Lijua',
    caption:
      '<strong>Github</strong> is - <a href="https://github.com/YuliyaDM/">Here</a>',
    siteLink: 'https://github.com/YuliyaDM',
  },
};

const INLINEMODERESULT = Object.keys(CREATORSIMAGES).map((el, index) => {
  return {
    type: 'article',
    id: String(index),
    document_file_id: String(index),
    title: CREATORSIMAGES[el].name,
    description: `${CREATORSIMAGES[el].name} is one of the creators.`,
    input_message_content: {
      message_text: CREATORSIMAGES[el].caption,
      parse_mode: 'HTML',
    },
    url: CREATORSIMAGES[el].siteLink,
    thumb_url: CREATORSIMAGES[el].photoLink,
    thumb_width: 500,
    thumb_height: 500,
  };
});

module.exports = {
  BADWORDS,
  TIMEFORWAITING,
  OURCHATID,
  REPLYMARKUP,
  CALLBACKQUERY,
  COMMANDS,
  ABOUTCOMMANDS,
  CREATORSIMAGES,
  INLINEMODERESULT,
  SETTINGS,
};
