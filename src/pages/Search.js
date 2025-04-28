import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Recipe from './Recipe'

const Search = () => {
    return (
        <>
            <Header />
            <Recipes />
            <Footer />
        </>
    )
}
function Recipes() {
    return (
        <>
            <div className="uk-section uk-section-default uk-padding-remove-top">
                <div className="uk-container">
                    <div data-uk-grid>
                        <div className="uk-width-1-2@m">
                            <form className="uk-search uk-search-default uk-width-1-1 uk-margin-small-bottom">
                                <span data-uk-search-icon />
                                <input className="uk-search-input uk-text-small uk-border-rounded uk-form-large" type="search" placeholder="Search for recipes..." />
                            </form>
                        </div>
                        <div className="uk-width-1-2@m uk-text-right@m">
                            <select className="uk-select uk-select-light uk-width-auto uk-border-pill uk-select-muted">
                                <option>Sort by: Latest</option>
                                <option>Sort by: Top Rated</option>
                                <option>Sort by: Trending</option>
                            </select>
                        </div>
                    </div>
                    <div className="uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-margin-medium-top" data-uk-grid>
                        <div>
                            <div className="uk-card">
                                <div className="uk-card-media-top uk-inline uk-light">
                                    <img className="uk-border-rounded-medium" src="https://source.unsplash.com/-YHSwy6uqvk/300x160" alt="Course Title" />
                                    <div className="uk-position-cover uk-card-overlay uk-border-rounded-medium" />
                                    <div className="uk-position-xsmall uk-position-top-right">
                                        <a href="#" className="uk-icon-button uk-like uk-position-z-index uk-position-relative" data-uk-icon="heart" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="uk-card-title uk-text-500 uk-margin-small-bottom uk-margin-top">Chef John's Turkey Sloppy Joes</h3>
                                    <div className="uk-text-xsmall uk-text-muted" data-uk-grid>
                                        <div className="uk-width-auto uk-flex uk-flex-middle">
                                            <span className="uk-rating-filled" data-uk-icon="icon: star; ratio: 0.7" />
                                            <span className="uk-margin-xsmall-left">5.0</span>
                                            <span>(73)</span>
                                        </div>
                                        <div className="uk-width-expand uk-text-right">by John Keller</div>
                                    </div>
                                </div>
                                <a href="recipe.html" className="uk-position-cover" />
                            </div>
                        </div>
                    </div>
                    <div className="uk-margin-large-top uk-text-small">
                        <ul className="uk-pagination uk-flex-center uk-text-500 uk-margin-remove" data-uk-margin>
                            <li><a href="#"><span data-uk-pagination-previous /></a></li>
                            <li><a href="#">1</a></li>
                            <li className="uk-disabled"><span>...</span></li>
                            <li><a href="#">5</a></li>
                            <li><a href="#">6</a></li>
                            <li className="uk-active"><span>7</span></li>
                            <li><a href="#">8</a></li>
                            <li><a href="#"><span data-uk-pagination-next /></a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Search