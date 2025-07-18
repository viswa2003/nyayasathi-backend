
const Law = require('../models/Law')

const getAllLaws = async (req, res) => {
    try {
        const laws = await Law.find()
        res.status(200).json(laws)
    } catch (error) {
        res.status(500).json({ message: 'Error fetching laws', error })
    }
}

const getLawById = async (req, res) => {
    try {
        const law = await Law.findById(req.params.id)
        
        if(!law) {
            return res.status(404).json({message: 'Law not found'})
        }

        res.status(200).json(law)
    } catch(error) {
        res.status(500).json({message: 'Error fething law', error})
    }
}

const createLaw = async (req, res) => {
    const{ title, section, description, punishment } = req.body

if(!title || !section || !description || !punishment) {
        return res.status(400).json({ message: 'All fields are required'})

}

try {
    const newLaw = new Law({
        title,
        section,
        description,
        punishment
    })
    await newLaw.save()
    res.status(201).json(newLaw)
} catch (error) {
    res.status(500).json({ message: 'Error creating law', error })
}
}

const deleteLaw = async (req, res) => {
    try {
        const law = await Law.findByIdAndDelete(req.params.id)
        
        if(!law) {
            return res.status(404).json({ message: 'Law not found' })
        }
        res.status(200).json({ message: 'Law deleted successfully' })
    } catch (error) {
        res.status(500).json({ message: 'Error deleting law', error })
    }
}


module.exports = {
    getAllLaws,
    getLawById,
    createLaw,
    deleteLaw
}