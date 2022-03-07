import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiListService {
  /* Talent */
  talentSignup = environment.base_url + '/v1/talent/auth/signup';
  //talentotpverify = environment.base_url + '/v1​/talent​/auth​/verify-mobile';
  talentotp = environment.base_url+'/v1/talent/auth/verify-mobile'
  talentLogin = environment.base_url + '/v1/talent/auth/login';
  talentForgotPass = environment.base_url + '/v1/talent/auth/forgot-password'
  talentVerifyForgotPass = environment.base_url + '/v1/talent/auth/forgot-password/verify-otp'
  talentResendForgotPass = environment.base_url + '/v1/talent/auth/forgot-password/resend-otp'
  talentBioInterests = environment.base_url + '/v1/talent/save-bio-categories'
  talentAddress = environment.base_url + '/v1/talent/save-address'
  talentBankDetails = environment.base_url + '/v1/talent/save-bank-details'
  talentPersonalDetails = environment.base_url + '/v1/talent/save-personal-details'
  talentMyInfo = environment.base_url + '/v1/talent/my-profile' 
  talnetMyProfile = environment.base_url + '/v1/talent/my-profile'
  talnetMyAddress = environment.base_url + '/v1/talent/my-address'
  talnetMybankDetail = environment.base_url + '/v1/talent/my-bank-detail'
  talnetMyPersonalDetail = environment.base_url + '/v1/talent/my-personal-detail'
  talnetSaveDoc = environment.base_url + '/v1/talent/save-docs'
  talenteditAccount = environment.base_url + '/v1/talent/edit-account'
  talentgetPersonalDoc = environment.base_url + '/v1/talent/my-personal-docs'
  talentEditPersonalDoc = environment.base_url + '/v1/talent/edit-personal-document'
  getTalentTask = environment.base_url + '/v1/talent/my-task'
  getBookingDetails = environment.base_url + '/v1/booking/detail'
  completedJob = environment.base_url + '/v1/talent/complete-booking'
  acceptOrRejectBookingRequest = environment.base_url + '/v1/booking/talent-action'
  getCompletedBookingDetails = environment.base_url + '/v1/booking/completed-detail'
  getSearchJobList = environment.base_url + '/v1/talent/search-job'
  getReviewListInTalent = environment.base_url + '/v1/review/list/in-talent'
  getTalentListAccordingToStatus = environment.base_url + '/v1/talent/my-booking'
  getAllCards = environment.base_url + '/v1/payment/get-all-cards'
  delCards = environment.base_url + '/v1/payment/delete-card/'
  saveCards = environment.base_url + '/v1/payment/save-card'
  getAllSubscriptionPlans = environment.base_url + '/v1/subscription-plans/get-all-plans'
updatePlans = environment.base_url + '/v1/subscription-plans/get-all-plans'




  /* Influncer */
  influncerSignup = environment.base_url + '/v1/influencer/auth/signup';
  influncerotp = environment.base_url+'/v1/influencer/auth/verify-mobile';
  influncerLogin = environment.base_url + '/v1/influencer/auth/login';
  influncerForgotPass = environment.base_url + '/v1/influencer/auth/forgot-password'
  influncerVerifyForgotPass = environment.base_url + '/v1/influencer/auth/forgot-password/verify-otp'
  influncerResendForgotPass = environment.base_url + '/v1/influencer/auth/forgot-password/resend-otp'
  influncerBioInterests = environment.base_url + '/v1/influencer/save-bio-interests'
  influncerAddress = environment.base_url + '/v1/influencer/save-address'
  influncerBankDetails = environment.base_url + '/v1/influencer/save-bank-details'
  influncerPersonalDetails = environment.base_url + '/v1/influencer/save-personal-details'
  influncerMyInfo = environment.base_url + '/v1/influencer/my-info'
  influncerMyProfile = environment.base_url + '/v1/influencer/my-profile'
  influncerMybankDetail = environment.base_url + '/v1/influencer/my-bank-detail'
  influncerMyPersonalDetail = environment.base_url + '/v1/influencer/my-personal-detail'
  influncerSaveSelfie = environment.base_url + '/v1/influencer/save-selfie'
  influncerSocialLinks = environment.base_url + '/v1/influencer/connect-social-account'
  influncerSavedAddress = environment.base_url+'/v1/influencer/my-address'
  influncerSaveSocialAccount = environment.base_url+'/v1/influencer/connect-social-account'
  influncerGetSocialAccount = environment.base_url+'/v1/influencer/get-social-account'
  influncerDisconnectSocialAccountfFacebook = environment.base_url+'/v1/influencer/disconect-social-account/facebook'
  influncerDisconnectSocialAccountinsta = environment.base_url + '/v1/influencer/disconect-social-account/insta'
  influncerDisconnectSocialAccountYoutube = environment.base_url + '/v1/influencer/disconect-social-account/youtube'
  influncerDisconnectSocialAccountTiktok = environment.base_url + '/v1/influencer/disconect-social-account/tiktok'

  influncerEditAccount = environment.base_url + '/v1/influencer/edit-account'
  influncerEditAddress = environment.base_url + '/v1/influencer/edit-address'
  influncerEditBankDetails = environment.base_url + '/v1/influencer/edit-bank-detail'
  influncerEditPersonalDetails = environment.base_url + '/v1/influencer/edit-personal-detail'

// compaign detail 
  compaignDetail = environment.base_url + '/v1/request/influencer-action'

  // save posts 
  saveCompaignPost = environment.base_url + '/v1/campaign/mark-save/'

  // unsave posts 
  unsaveCompaignPost = environment.base_url + '/v1/campaign/mark-unsave/'

  //Notification List 
  notificationListing = environment.base_url + '/v1/notification/all'

  // campaign search 
  campaignSearch  = environment.base_url + '/v1/influencer/search-campaign'

  // influencer (change) verify number

  verifymobileNumber = environment.base_url + '/v1/influencer/change-mobile'
  verifyOTP = environment.base_url + '/v1/influencer/verify-new-mobile'

  // influncerCampaignHall = environment.base_url + 'v1/influencer/campaign-hall'
  influncerCampaignHall = environment.base_url + '/v1/influencer/campaign-hall'
  campaignDetail = environment.base_url + '/v1/campaign/detail/'

//get Collaboration list
  influncerCollaboration = environment.base_url + '/v1/influencer/my-collaboration'

  // get Review list 
  influncerReviews = environment.base_url + '/v1/review/list/in-influencer'  

  //get influencer info 
  influncerInfo = environment.base_url + '/v1/influencer/my-info'  
  
  //  // unsave posts 
  //  unsaveCompaignPost = environment.base_url + '/v1/campaign/mark-unsave/'
  
  //  // compaign detail 
  // compaignDetail = environment.base_url + '/v1/request/influencer-action'

  // // save posts 
  // saveCompaignPost = environment.base_url + '/v1/campaign/mark-save/'

  // // campaign search 
  // campaignSearch  = environment.base_url + '/v1/influencer/search-campaign'

  // influencer travelling time
  travellingtime = environment.base_url + '/v1/trip/create'  


  /* Client */
  clientSignup = environment.base_url + '/v1/business/auth/signup';
  clientOtp = environment.base_url + '/v1/business/auth/verify-mobile'
  clientSocialLink = environment.base_url +'/v1/business/save-social-links'
  clientLogin = environment.base_url +'/v1/business/auth/login'
  clientProfile = environment.base_url +'/v1/business/my-profile'
  clientEditProfile = environment.base_url + '/v1/business/edit-profile'
  clientCampiagnList = environment.base_url +'/v1/business/my-campaign'
  clientRequestList= environment.base_url +'/v1/request/list/'
  clientCamipaignDetail = environment.base_url + '/v1/campaign/detail/'
  clientBusinessStatus = environment.base_url + '/v1/request/business-action/'
  clientCampaignHistory = environment.base_url + '/v1/business/my-campaign-history'
  clientSocialAccount = environment.base_url + '/v1/business/my-social-links'
  clientEditSocialLinks = environment.base_url + '/v1/business/update-social-links'
  editProfile = environment.base_url + '/v1/business/edit-profile'
  talentDetails = environment.base_url + '/v1/business/talent-detail/'



  /* ============campaign================== */
  createCampign = environment.base_url + '/v1/campaign/create'


  /* =========== Client Talent ===========*/
  businessList = environment.base_url + '/v1/business/my-talent-booking?currentTime='
  businessDetail = environment.base_url + '/v1/business/talent-detail/'
  businessSerachByName = environment.base_url + '/v1/business/search/talent/'
  talentReviews = environment.base_url + '/v1/review/list/in-business/for-talent'
  getStaticData = environment.base_url + '/v1/staticdata?type'
  talentList= environment.base_url + '/v1/business/filter-talent'
  clientBookingDetails = environment.base_url + '/v1/booking/completed-detail/'
  giveRating = environment.base_url + '/v1/review/create/by-business'
  searchTalent = environment.base_url + '/v1/business/search/talent/'
  hireTalent = environment.base_url + '/v1/booking/create/for-talent'

  /* Common */
  ImageUpload = environment.base_url + '/v1/file/generate-presigned-url'
  categoryList = environment.base_url + '/v1/category/all'
  interestList = environment.base_url + '/v1/interest/all '

  /* static pages */
  ContactUs = environment.base_url + '/v1/contactus/send-message'
  staticData =  environment.base_url + '/v1/staticdata?type='
  
  constructor() {
   }
}
