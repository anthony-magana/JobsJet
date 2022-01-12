import dbConnect from "../../../utils/dbConnect";
import Profile from "../../../models/Profile";
import { withApiAuthRequired } from '@auth0/nextjs-auth0'

dbConnect();

export default withApiAuthRequired(async function (req, res) {
    const {
        query: { id },
        method
    } = req;

    switch (method) {
        case "GET":
            try {
                const profile = await Profile.findById(id);

                if (!profile) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: profile });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case "PUT":
            try {
                const profile = await Profile.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                });

                if (!profile) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: profile });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case "DELETE":
            try {
                const deletedProfile = await Profile.deleteOne({ _id: id });
                
                if (!deletedProfile) {
                    return res.status(400).json({ success: false });
                }

                res.status(200).json({ success: true, data: {} });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
});