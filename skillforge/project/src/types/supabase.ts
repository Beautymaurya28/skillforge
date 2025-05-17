export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          name: string
          avatar_url: string | null
          xp: number
          skill_coins: number
          level: number
          college: string | null
          city: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          name: string
          avatar_url?: string | null
          xp?: number
          skill_coins?: number
          level?: number
          college?: string | null
          city?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          name?: string
          avatar_url?: string | null
          xp?: number
          skill_coins?: number
          level?: number
          college?: string | null
          city?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      modules: {
        Row: {
          id: string
          title: string
          description: string
          difficulty: string
          category: string
          tags: string[]
          xp_reward: number
          coin_reward: number
          estimated_time: string | null
          prerequisites: string[]
          completions: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          difficulty: string
          category: string
          tags?: string[]
          xp_reward?: number
          coin_reward?: number
          estimated_time?: string | null
          prerequisites?: string[]
          completions?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          difficulty?: string
          category?: string
          tags?: string[]
          xp_reward?: number
          coin_reward?: number
          estimated_time?: string | null
          prerequisites?: string[]
          completions?: number
          created_at?: string
          updated_at?: string
        }
      }
      user_progress: {
        Row: {
          id: string
          user_id: string
          module_id: string
          status: string
          completed_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          module_id: string
          status?: string
          completed_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          module_id?: string
          status?: string
          completed_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          title: string
          description: string
          user_id: string
          module_id: string | null
          tags: string[]
          likes: number
          comments: number
          image_url: string | null
          demo_url: string | null
          code_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          user_id: string
          module_id?: string | null
          tags?: string[]
          likes?: number
          comments?: number
          image_url?: string | null
          demo_url?: string | null
          code_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          user_id?: string
          module_id?: string | null
          tags?: string[]
          likes?: number
          comments?: number
          image_url?: string | null
          demo_url?: string | null
          code_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      forum_threads: {
        Row: {
          id: string
          title: string
          content: string
          user_id: string
          tags: string[]
          upvotes: number
          comments: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          user_id: string
          tags?: string[]
          upvotes?: number
          comments?: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          user_id?: string
          tags?: string[]
          upvotes?: number
          comments?: number
          created_at?: string
          updated_at?: string
        }
      }
      badges: {
        Row: {
          id: string
          name: string
          description: string
          icon: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          icon: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          icon?: string
          created_at?: string
        }
      }
      user_badges: {
        Row: {
          id: string
          user_id: string
          badge_id: string
          unlocked_at: string
        }
        Insert: {
          id?: string
          user_id: string
          badge_id: string
          unlocked_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          badge_id?: string
          unlocked_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}