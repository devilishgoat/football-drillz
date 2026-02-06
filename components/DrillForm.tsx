import { useState, FormEvent } from 'react'
import { Drill } from '@/lib/types'
import styles from './DrillForm.module.css'

interface DrillFormProps {
  onSubmit: (drill: Omit<Drill, 'id' | 'createdAt'>) => void
}

export default function DrillForm({ onSubmit }: DrillFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    duration: '',
    tags: [] as string[],
  })
  const [tagInput, setTagInput] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!formData.title || !formData.date || !formData.time) {
      alert('Please fill in title, date, and time')
      return
    }

    onSubmit(formData)

    // Reset form
    setFormData({
      title: '',
      description: '',
      date: '',
      time: '',
      duration: '',
      tags: [],
    })
  }

  const handleAddTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, tagInput.trim()],
      })
      setTagInput('')
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove),
    })
  }

  const handleTagInputKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddTag()
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label>Drill Name</label>
        <input
          type="text"
          value={formData.title}
          onChange={e => setFormData({ ...formData, title: e.target.value })}
          placeholder="e.g., Passing & Movement"
          required
        />
      </div>

      <div className={styles.formRow}>
        <div className={styles.formGroup}>
          <label>Date</label>
          <input
            type="date"
            value={formData.date}
            onChange={e => setFormData({ ...formData, date: e.target.value })}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label>Time</label>
          <input
            type="time"
            value={formData.time}
            onChange={e => setFormData({ ...formData, time: e.target.value })}
            required
          />
        </div>
      </div>

      <div className={styles.formGroup}>
        <label>Duration (minutes)</label>
        <input
          type="number"
          value={formData.duration}
          onChange={e => setFormData({ ...formData, duration: e.target.value })}
          placeholder="30"
        />
      </div>

      <div className={styles.formGroup}>
        <label>Description</label>
        <textarea
          value={formData.description}
          onChange={e => setFormData({ ...formData, description: e.target.value })}
          placeholder="Describe the drill objectives and setup..."
        />
      </div>

      <div className={styles.formGroup}>
        <label>Tags</label>
        <div className={styles.tagInputContainer}>
          <input
            type="text"
            value={tagInput}
            onChange={e => setTagInput(e.target.value)}
            onKeyPress={handleTagInputKeyPress}
            placeholder="e.g., Passing, Defense, Conditioning"
          />
          <button type="button" className={styles.btnAddTag} onClick={handleAddTag}>
            Add
          </button>
        </div>
        {formData.tags.length > 0 && (
          <div className={styles.tagsDisplay}>
            {formData.tags.map(tag => (
              <div key={tag} className={styles.tag}>
                {tag}
                <button type="button" onClick={() => handleRemoveTag(tag)}>
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <button type="submit" className={styles.btnSubmit}>
        Schedule Drill
      </button>
    </form>
  )
}
