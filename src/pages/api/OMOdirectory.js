import OMOdirectory from '#/data/OMOdirectory.json'

export default function handler(req, res) {
  res.status(200).json(OMOdirectory)
}