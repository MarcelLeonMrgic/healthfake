"use client"

import React, { useEffect, useState } from "react"

type Fruit = { name: string }

export default function FruitsList() {
  const [fruits, setFruits] = useState<Fruit[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchFruits = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch("http://localhost:8000/fruits")
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`)
      const data = await res.json()
      setFruits(data.fruits ?? [])
    } catch (e: any) {
      setError(e.message || "Fetch error")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchFruits()
  }, [])

  return (
    <section className="max-w-3xl mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Fruits</h2>
        <button onClick={fetchFruits} className="text-sm px-3 py-1 border rounded">
          Refresh
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : fruits.length === 0 ? (
        <p>No fruits yet.</p>
      ) : (
        <ul className="space-y-2">
          {fruits.map((f, i) => (
            <li key={i} className="p-3 border rounded">
              {f.name}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
