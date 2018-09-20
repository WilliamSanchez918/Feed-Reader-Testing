/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        beforeEach(function() {
            //may be needed
         })


        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        // Determines if all feeds have a valid URL
        it('allFeeds object(s) are defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url.length).not.toBe(0);
            })
        })


        // Determines that all feeds are accurately named
        it('all feeds are named', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeTruthy();
            })
        })
        
    });

    // Menu Spec; Menu spec identifies if menu status is hidden by default, 
    // and if status changes upon click.
    describe('The Menu', function() {
        let bodyz;

        beforeEach(function() {
            bodyz = document.getElementsByClassName('menu-hidden');
         })

        
         //
        it('Menu is hidden by default', function() {
            
            expect(bodyz.length).toBeGreaterThan(0)
        })

        //Show/hide are two 
        it('Menu is visible when clicked', function() {
            let show = $('.menu-icon-link').click();
            expect($('body').hasClass("menu-hidden")).toBe(false);

            let hide = $('.menu-icon-link').click();
            expect($('body').hasClass("menu-hidden")).toBe(true);

            show, hide = null;
        })

    })


    // async function for testing feed loads
    describe('Initial Entries', function () {

        beforeEach(function (done) {
            loadFeed(0, done);
            });
        
        //confirms at least a single entry
        it('Feed contains at least one entry', function () {
            let entryContent = $('.feed .entry')
            expect(entryContent.length).toBeGreaterThan(0)
            });


          })



          // does a comparison between feed lists to validate content differences
        describe('New Feed Selection', function () {
            let firstList, secondList;
          
            // need to make sure that the feed loads 
            beforeEach(function (done) {
                loadFeed(0, function () {
                    //First List
                    firstList = $('.feed').html();
                    loadFeed(1, function () {
                        done();
                        });
                    });
                });

            //reload
            afterEach(function(){
                loadFeed(0);
                });
          
            //check for comparison
            it('check to see if the feeds change',function(){
            secondList = $('.feed').html();
            expect(firstList).not.toEqual(secondList);
            });
          });


    
}());
