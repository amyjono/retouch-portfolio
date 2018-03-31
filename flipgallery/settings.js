/*!
 * flipGallery - jQuery Powered Animated Photo Gallery
 * version: 1.1.1
 * @requires jQuery v1.5 or later
 *
 * License at http://flipgallery.net/#download
 * 
 * Example at http://flipgallery.net
 *
 * Copyright 2014 flipGallery.net
 *
 */

var fg_my_content = {
        
        content_master: {
                
                gallery_master_folder: 'images',
                main_menu_title: '',
},
                
        gallery_1: {
                        
                cover_thumb: 'editorial-thumb.jpg',
                gallery_title: 'Editorial',
                image_1: { thumb: 'alice-luker-01-sq.jpg', enlarged: 'alice-luker-01.jpg', text: 'Photography by Alice Luker' },
                image_2: { thumb: 'origami-blue-3-sq.jpg', enlarged: 'origami-blue-3.jpg', text: 'Colour By Numbers for Ted Baker' },
                image_3: { thumb: 'baya-navy-2-sq.jpg', enlarged: 'baya-navy-2.jpg', text: 'Colour By Numbers for Ted Baker' },
                image_4: { thumb: 'the-outnet-athleisure-02-sq.jpg', enlarged: 'the-outnet-athleisure-02.jpg', text: 'Athleisure for The Outnet' },
                image_5: { thumb: 'the-outnet-athleisure-01-sq.jpg', enlarged: 'the-outnet-athleisure-01.jpg', text: 'Athleisure for The Outnet' },
                image_6: { thumb: 'fashion-insider-01-sq.jpg', enlarged: 'fashion-insider-01.jpg', text: 'Photography by Alice Luker for Fashion Insider Magazine' },
        },

        gallery_2: {
                        
                cover_thumb: 'still-life-thumb.jpg',
                gallery_title: 'Still Life',        
                image_1: { thumb: 'coco-chanel-stacked-sq.jpg', enlarged: 'coco-chanel-stacked.jpg', text: 'Coco Chanel for Net-A-Porter'},
                image_2: { thumb: 'coco-chanel-flat-sq.jpg', enlarged: 'coco-chanel-flat.jpg', text: 'Coco Chanel for Net-A-Porter' },
                image_3: { thumb: 'net-a-porter-heirloom-jewelry-sq.jpg', enlarged: 'net-a-porter-heirloom-jewelry.jpg', text: 'Heirloom Jewelry for Net-A-Porter' },
                image_4: { thumb: 'larkspur-and-hawk-sq.jpg', enlarged: 'larkspur-and-hawk.jpg', text: 'Larkspur and Hawk for Net-A-Porter'},
                image_5: { thumb: 'delfina-delettrez-rings-sq.jpg', enlarged: 'delfina-delettrez-rings.jpg', text: 'Delfina Delettrez for Net-A-Porter' },
                image_6: { thumb: 'jennifer-meyer-rings-sq.jpg', enlarged: 'jennifer-meyer-rings.jpg', text: 'Jennifer Meyer for Net-A-Porter' },
                
        },

        gallery_3: {
                
                cover_thumb: 'published-thumb.jpg',
                gallery_title: 'Published',
                image_1: { thumb: 'colour-by-numbers-sq.jpg', enlarged: 'colour-by-numbers.jpg', text: 'Colour By Numbers for Ted Baker home page' },
                image_2: { thumb: 'coco-chanel-stacked-published-sq.jpg', enlarged: 'coco-chanel-stacked-published.jpg', text: 'Coco Chanel for Net-A-Porter' },
                image_3: { thumb: 'coco-chanel-flat-published-sq.jpg', enlarged: 'coco-chanel-flat-published.jpg', text: 'Coco Chanel for Net-A-Porter' },
                image_4: { thumb: 'fashion-insider-cover-sq.jpg', enlarged: 'fashion-insider-cover.jpg', text: 'Russian Decadence for Fashion Insider Magazine.' },
                image_5: { thumb: 'net-a-porter-making-tracks-sq.jpg', enlarged: 'net-a-porter-making-tracks.jpg', text: 'Making Tracks article for Net-A-Porter' },
                image_6: { thumb: 'noir-magazine-sq.jpg', enlarged: 'noir-magazine.jpg', text: 'Noir Magazine' },
                image_7: { thumb: 'net-a-porter-beauty-sq.jpg', enlarged: 'net-a-porter-beauty.jpg', text: 'Article for Net-A-Porter'},
                image_8: { thumb: 'fashion-q-and-a-magazine-02-sq.jpg', enlarged: 'fashion-q-and-a-magazine-02.jpg', text: 'Fashion Q and A magazine'},
                image_9: { thumb: 'net-a-porter-boho-sq.jpg', enlarged: 'net-a-porter-boho.jpg', text: 'The Edit for Net-A-Porter'},
                image_10: { thumb: 'fashion-q-and-a-magazine-04-sq.jpg', enlarged: 'fashion-q-and-a-magazine-04.jpg', text: 'Fashion Q and A magazine'},
                image_11: { thumb: 'the-outnet-iris-and-ink-published-sq.jpg', enlarged: 'the-outnet-iris-and-ink-published.jpg', text: 'Iris and Ink for The Outnet'},
                image_12: { thumb: 'fashion-q-and-a-magazine-sq.jpg', enlarged: 'fashion-q-and-a-magazine.jpg', text: 'Fashion Q and A magazine'},
                
        },

};

// MODE SETTINGS
// -------------

var fg_mode_settings = {
        
        edit_mode: 1,
        
        // 1 = On & 0 = Off.
        
        // ***IMPORTANT***: It is recommended to leave this
        // option switched on during assembly of your galleries
        // as it will prevent your images from caching.
        // Once published online, it is then recommended that you
        // switch it off, as it will result in the reduction of
        // workload on your hosting.
        
}

// VISUAL SETTINGS
// ---------------

var fg_visual_settings = {
        
        // *Content Visual Settings*
        
        position_property: 'position: fixed; top: 150px;',
        
        // *Gallery Navigation Visual Settings*
        
        gallery_navigation_bar_margin_top: 10, // (pixels)
        
        gallery_navigation_bar_height: 40, // (pixels)
    
        // *Thumbnail Visual Settings*

        thumbnail_columns: 3, 
    
        thumbnail_rows: 2, 
    
        thumbnail_width: 310, // (pixels)
    
        thumbnail_height: 310, // (pixels)
    
        thumbnail_space_top: 3, // (pixels)
    
        thumbnail_space_left: 3, // (pixels)
    
        thumbnail_space_right: 3, // (pixels)
    
        thumbnail_space_bottom: 3, // (pixels)
    
        // *Lightbox Visual Settings*
    
        lightbox_background_opacity: 0.8,
    
        lightbox_border_width: 10, // (pixels)
    
        lightbox_border_color: '#fff'
    
}

// SPEED SETTINGS
// --------------

var fg_speed_settings = {
    
        thumbnail_flip_speed: 800,
    
        // Speed of complete thumbnail flip (milliseconds).
    
        initial_time_gap_between_thumbnails: 200,
    
        // Time gap between each thumbnail flipping in when the
        // page first loads (milliseconds).
    
        normal_time_gap_between_thumbnails: 50
    
        // Time gap between each thumbnail flipping round after
        // page load (milliseconds).

}

// TEXT SETTINGS
// -------------

var fg_text_settings = {
        
        // *Gallery Title Text Settings*
    
        gallery_title_text_style: 'font-size: 20px; color: #4C4C4C; font-weight: bold;',
    
        // *Gallery Navigation Text Settings*
    
        return_to_main_gallery_text: '&lsaquo;&lsaquo; Return to main gallery',
    
        return_to_main_gallery_text_style: 'font-size: 12px; color: #4C4C4C; text-decoration: none;',
    
        next_gallery_text: 'Next &rsaquo;&rsaquo;',
    
        back_gallery_text: '&lsaquo;&lsaquo; Back',
    
        next_and_back_text_style: 'font-size: 12px; color: #333; text-decoration: none;',
    
        page_number_page: 'Page',
    
        page_number_of: 'of',
    
        page_number_text_style: 'font-size: 12px; color: #999;',
    
        // *Picture/Lightbox Text Settings*
    
        lightbox_text_style: 'font-size: 14px; line-height: 1.4; color: #000; text-align: center;',
    
        lightbox_text_background_style: 'background-color: #fff; opacity:0.8;',
    
        // *Picture/Lightbox Navigation Text Settings*
    
        next_image_text: 'Next &rsaquo;&rsaquo;',
    
        back_image_text: '&lsaquo;&lsaquo; Back',
    
        next_and_back_image_text_style: 'font-weight: bold; color: #000;',
    
        image_number_page: 'Image',
    
        image_number_of: 'of',
    
        image_number_text_style: 'color: #999;',

        // *Image Streaming Text Settings*

        loading_text_color: '#fff',
    
        loading_text_opacity: '0.3'
    
}