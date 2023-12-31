import actionMe from './actionsMe';
import actionsProducts from './actionAdminProducts';
import actionsReviews from './actionUserDeleteEditReviews';
import actionUsers from './actionAdminUsers';

/**
 * This function works as a wrapper function and router function is used to process the data from any form.
 * Instead of using the standard form tag, the Form router element prevents the browser's default behaviour of automatically sending a request to the backend.
 * However, the current action function is used to process all form data and create the desired request configurations before sending a server request.
 * The route definition where the form exists also needs to include the action, which will contain all the data that was specified for the relevant part of the form.
 * @returns The user is directed to the main page if the request is successful; otherwise, handle the errors.
 */
async function action({ request }) {
    //1 Get the search params of the current page, URL default constructor provided by the browser
    const tab = request.url.split('=').pop();
    //2 Handle only the following forms
    if (tab !== 'products' && tab !== 'me' && tab !== 'reviews' && tab !== 'users') {
        throw new Error('Unrecognized request . Please cotact the administrator !');
    }

    //3 Handle profile actions
    if (tab === 'me') {
        return await actionMe(request);
    }

    //4 Handle products actions
    if (tab === 'products') {
        return await actionsProducts(request);
    }

    //5 Handle reviews actions
    if (tab === 'reviews') {
        return await actionsReviews(request);
    }

    //6 Handle reviews actions
    if (tab === 'users') {
        return await actionUsers(request);
    }

    return null;
}
export default action;
