import express from "express"

import { getInboxDetails, sendRequest } from "../controllers/request.controller.js"
import { acceptRequest,showFriends } from "../controllers/friend.controller.js"

const router=express.Router()


router.route('/request').post(sendRequest)
router.route('/inbox/:id').get(getInboxDetails)
router.route('/accept/:userId/:friendId').get(acceptRequest)
router.route('/showFriend/:userId').get(showFriends)

export default router