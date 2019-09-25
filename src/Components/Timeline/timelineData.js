const timelineData = [
    {
        media: {
            type: 'video',
            src: 'https://www.youtube.com/embed/w87GNWJHtFM',
            title: 'David Cameron announces date of Brexit referendum outside 10 Downing Street'
        },

        date: '20 February 2016',
        text: 'David Cameron announces that the country will vote in referendum on 23 June.'
    },

    {
        media: {
            type: 'image',
            src: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/06/23/11/referendum-16.jpg?w968h681',
            alt: 'A woman leaves a polling station after voting'
        },

        date: '23 June 2016',
        text: 'The UK votes in the referendum.'
    },

    {
        media: {
            type: 'image',
            src: 'https://static01.nyt.com/images/2016/06/24/world/europe/how-britain-voted-brexit-referendum-1466746689036/how-britain-voted-brexit-referendum-1466746689036-facebookJumbo-v3.png',
            alt: 'A map of the UK showing the referendum results for each region'
        },

        date: '24 June 2016',
        text: 'After it is announced the the UK voted 52 per cent to leave the EU, Cameron resigns as Prime Minister.'
    },

    {
        media: {
            type: 'image',
            src: 'http://www.chinadaily.com.cn/world/images/attachement/jpg/site1/20160704/eca86bd9e0d118e4028704.jpg',
            alt: 'A female demonstrator with the EU flag painted on her face looks at the camera with Big Ben visible in the background'
        },

        date: '2 July 2016',
        text: 'Thousands of anti-Brexit protesters marched through the streets of London.'
    },

    {
        media: {
            type: 'image',
            src: 'https://cdn3.img.sputniknews.com/images/105346/72/1053467289.jpg',
            alt: 'Theresa May and her husband stand at the door of 10 Downing STreet waving'
        },

        date: '13 July 2016',
        text: 'Theresa May wins a Tory leadership contest and becomes Prime Minister.'
    },

    {
        media: {
            type: 'image',
            src: 'https://cdn2.theweek.co.uk/sites/theweek/files/2017/03/170331_-_may_signing_article_50_letter.jpg',
            alt: 'Theresa May signs Article 50 at her desk.'
        },

        date: '29 March 2017',
        text: 'May triggers Article 50 of the Lisbon Treaty, formally kick-starting a two-year countdown to the UK exiting the bloc.'
    },

    {
        media: {
            type: 'video',
            src: 'https://www.youtube.com/embed/4xr9-CkZZRk',
            alt: 'Theresa May signs Article 50 at her desk.'
        },

        date: '18 April 2017',
        text: 'May calls a snap General Election.'
    },

    {
        media: {
            type: 'image',
            src: 'https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fcom.ft.imagepublish.prod.s3.amazonaws.com%2F0688aa3c-4cb4-11e7-a3f4-c742b9791d43?fit=scale-down&source=next&width=700',
            alt: 'Theresa May signs Article 50 at her desk.'
        },

        date: '9 June 2017',
        text: 'Election results show a hung Parliament, with Labour gains and the Tories losing its majority.'
    },

    {
        media: {
            type: 'video',
            src: 'https://www.youtube.com/embed/q0N1CTUbouw',
            alt: 'Theresa May signs Article 50 at her desk.'
        },

        date: '4 October 2017',
        text: 'May gives disastrous keynote speech on the last day of the Tory Conference.'
    },

    {
        media: {
            type: 'video',
            src: 'https://www.youtube.com/embed/fn2FlgyZTvE',
            alt: 'Theresa May signs Article 50 at her desk.'
        },

        date: '23 June 2018',
        text: '100,000 people take part in a People’s Vote demonstration against Brexit.'
    },

    {
        media: {
            type: 'image',
            src: 'https://cdn.images.express.co.uk/img/dynamic/139/590x/brexit-news-uk-eu-david-davis-boris-johnson-michel-barnier-theresa-may-986207.jpg?r=1532971433900',
            alt: 'Theresa May signs Article 50 at her desk.'
        },

        date: '9 July 2018',
        text: 'Brexit Minister David Davis and Foreign Secretary Boris Johnson resign in protest at the Prime Minister\'s Brexit plan. '
    },

    {
        media: {
            type: 'image',
            src: 'https://i1.wp.com/www.reportfocusnews.com/wp-content/uploads/2018/10/Dp81NSgWkAA5ci-.jpg?w=1200&ssl=1',
            alt: 'Theresa May signs Article 50 at her desk.'
        },

        date: '20 October 2018',
        text: 'People’s Vote march attracts 700,000 people through the streets of central London, calling for another referendum.'
    },

    {
        media: {
            type: 'image',
            src: 'https://pbs.twimg.com/media/DuP_2OSUcAAYc5g.jpg',
            alt: 'Theresa May signs Article 50 at her desk.'
        },

        date: '12 December 2018',
        text: 'The Prime Minister survives a vote of no confidence.'
    },

    {
        media: {
            type: 'video',
            src: 'https://www.youtube.com/embed/jPBK5pChcds',
            alt: 'Theresa May signs Article 50 at her desk.'
        },

        date: '15 January 2019',
        text: 'Theresa May suffers worst parliamentary defeat in modern history as MPs reject her Brexit deal by a majority of 230.'
    },

    {
        media: {
            type: 'video',
            src: 'https://www.youtube.com/embed/_UI9XcQ0jFc',
            alt: 'Theresa May signs Article 50 at her desk.'
        },

        date: '24 June 2019',
        text: 'Theresa May resigns.'
    },

    {
        media: {
            type: 'image',
            src: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/0296/production/_108026600_johnson-pg1-afp.jpg',
            alt: 'Theresa May signs Article 50 at her desk.'
        },

        date: '24 July 2019',
        text: 'Boris Johnson becomes Prime Minister.'
    },

    {
        media: {
            type: 'image',
            src: 'https://media.pri.org/s3fs-public/styles/story_main/public/images/2019/08/my_post_32.jpg?itok=RjK4H3ci',
            alt: 'Theresa May signs Article 50 at her desk.'
        },

        date: '28 August 2019',
        text: 'Demonstrations erupt acorss the country after PM asks Queen to suspend Parliament till October, giving MPs less time to block a no-deal Brexit.'
    },

    {
        media: {
            type: 'image',
            src: 'https://pbs.twimg.com/media/EDkpTl_XoAEzSFj.jpg',
            alt: 'Theresa May signs Article 50 at her desk.'
        },

        date: '4 September 2019',
        text: 'MPs back bill blocking 31 Oct no-deal Brexit with opposition MPs and Tory rebels joining to pass bill by 327 votes to 299. PM reacts by calling for general election which opposition parties have refused to back.'
    }
]

export default timelineData