import dbConnect from "../../../utils/dbConnect";
import Profile from "../../../models/Profile";
import { withApiAuthRequired } from '@auth0/nextjs-auth0'

dbConnect();

export default withApiAuthRequired(async function (req, res) {
    const { method } = req;
    
    switch (method) {
        case "GET":

            try {
                const profiles = await Profile.find({});

                res.status(200).json({ success: true, data: profiles });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case "POST":
            try {
                const profile = await Profile.create(req.body);

                res.status(201).json({ success: true, data: profile });
            } catch (error) {
                res.status(400).json({ success: false, error: 'errorrrr' });
            }
            break;
        default:
            res.status(400).json({ success: false });
    }
});